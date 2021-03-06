import React from 'react';
import { queryNewWord, queryPath } from '../node_functions';
import { colors }  from "../myConfig";
import SuggestionsContainer from "./SearchSuggestion/SearchSuggestion";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, InputGroup, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

/*
 * ===========================================
 *      NavBar Componente for React 
 * ===========================================
 * 	 Using ReaactBootStrap to render the navbar
 */

function NavBarContainer({ state, dispatchState }){

		const ref = React.createRef();

		// handle the change by seting the state variable to 
		const handleSearchChange = change => 
				dispatchState({ 
						type: 'SET_SEARCH_TERM',
						payload: change.target.value 
				});

		const handleSearchSubmit = () =>  {
				/* handle submit search button */
				// get words if there are multiple of them 
				let words = getmultipleWords(state.searchTerm.toLowerCase());
				// set all serches to lowercase
				if(words.length > 1){
						//if it has more that two words
						queryPath(words, state, dispatchState);
				}else{ 
						// if there is only one word
						queryNewWord(words[0], state, dispatchState);
				}
		}

		const getmultipleWords = (string) => {
				/* determines qhereteher a string 
				 * is compossed of multiple words */
				//remove multiple spaces
				//trim, remove multiple and seperate by spaces
				return string.replace(/  +/g, ' ').trim().split(' ') 
		}

		const handleRadioGraphChange = (changeEvent) => 
				dispatchState({type:'SET_GRAPH_TYPE', payload:changeEvent.target.value});

		const handleToggleDeepLinks = () => {
				/* hangles the toggle of the deep links, 
				 * resets the graph if there is already a 
				 * selected node */
				let selectedNode = state.selected;
				if(!state.isEmpty) queryNewWord(selectedNode.id, state, dispatchState);
				dispatchState({type:'TOGGLE_DEEP_LINKS'});
		}


		return(
				<Navbar expand="lg" className="justify-content-center"
						variant="dark" style={{backgroundColor: colors.black}}>
						<a href="index.html">
								<img src="/logo.png" width="150"
										height="70"
										alt="React Bootstrap logo" />
						</a>
						<Navbar.Brand href="index.html" className="row"  >
								<h1>Dictographo</h1>
						</Navbar.Brand>
						<InputGroup  size='lg' md='auto' className="pl-3" style={{maxWidth: "700px"}} >
								<InputGroup.Prepend>
										<SuggestionsContainer state={state} dispatchState={dispatchState} handleSearchSubmit={handleSearchSubmit}/ >
								</InputGroup.Prepend>
								<FormControl size="lg" as='input' type="text" placeholder="Write some words..." 
										value={state.searchTerm} onChange={handleSearchChange}/>
								<InputGroup.Append className="pr-2" >
										<Button ref={ref} size="lg" variant="outline-info" onClick={handleSearchSubmit}>Search</Button>
								</InputGroup.Append>
						</InputGroup>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav" >
								<Nav >
										<NavDropdown 
												title="Options" 
												icon={<FontAwesomeIcon icon={faSlidersH}/>}
												style={{backgroundColor: colors.black }} 
												className="text-left ml-3 pl-3"
										>
												<Form.Group as={Col}>
														<Form.Check
																type="switch"
																className="pb-1 ml-2 text-left"
																label="Nodes"
																value="d3"
																name="formHorizontalRadios"
																id="d3"
																checked={state.graphType === "d3"}
																onChange={handleRadioGraphChange}/ >
														<Form.Check
																type="switch"
																className="pb-1 ml-2 text-left"
																label="Words"
																value="2D"
																name="formHorizontalRadios"
																id="formHorizontalRadios2"
																checked={state.graphType === "2D"}
																onChange={handleRadioGraphChange} />
														<Form.Check
																type="switch"
																className="pb-1 ml-2 text-left"
																label=" 3D"
																value="3D"
																name="formHorizontalRadios"
																id="formHorizontalRadios3"
																checked={state.graphType === "3D"}
																onChange={handleRadioGraphChange}
														/>
														<NavDropdown.Divider />
														<Form.Check 
																type="switch" 
																className="text-center"
																id="custom-switch" 
																label="Deep Links"
																value={state.isDeepLinks} 
																onChange={handleToggleDeepLinks}
														/>
												</Form.Group>
										</NavDropdown>
								</Nav>
						</Navbar.Collapse>
				</Navbar>
		)
}

export default NavBarContainer;
