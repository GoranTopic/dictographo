import React from 'react';
import { queryNewWord, queryPath } from '../node_functions';
import { colors }  from "../myConfig";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

/*
 * =======================================
 *      NavBar Componente for React 
 * =======================================
 * 	 Using ReaactBootStrap to render the navbar
 */

function NavBarContainer({ state, dispatchState }){

		// handle the change by seting the state variable to 
		const handleSearchChange = change => dispatchState({ type: 'SET_SEARCH_TERM', payload: change.target.value });

		const handleSearchSubmit = () =>  {
				/* handle submit search button */
				//console.log(state.search) very conviente
				// set all serches to lowercase
				let words = [] //list of words
				let setOfWords = {} //set of two words
				let searchInput = state.searchTerm.toLowerCase();
				
				if(hasMultipleWords(searchInput)){
						words = searchInput.replace(/  +/g, ' ').trim().split(' ') 
						//trim, remove multiple and seperate by spaces
						setOfWords = { first: words[0], second: words[1] }
						queryPath(setOfWords, state, dispatchState);
				}else{ 
						queryNewWord(searchInput, state, dispatchState);
				}
		}

		const hasMultipleWords = (string) => {
				/* determines qhereteher a string 
				 * is compossed of multiple words */
				//remove multiple spaces
				string = string.replace(/  +/g, ' '); 
				//trim edges spaces
				string = string.trim() 
				return string.indexOf(' ') !== -1
		}
		

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
						<InputGroup  size='lg' md='auto' className="mx-3" style={{maxWidth: "600px"}} >
								<FormControl size="lg" as='input' type="text" placeholder="Dog Cat" 
										value={state.searchTerm} onChange={handleSearchChange} 
										onKeyPress={event => (event.key === "Enter") && handleSearchSubmit()}/>
								<InputGroup.Append>
										<Button size="lg" variant="outline-info" onClick={handleSearchSubmit}>Search</Button>
								</InputGroup.Append>
						</InputGroup>
						<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="ml-auto mx-4">
										<NavDropdown variant="dark"
												size="lg" title="Options" 
												icon={<FontAwesomeIcon icon={faSlidersH}/>}
												id="basic-nav-dropdown">
												<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
												<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
												<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
												<NavDropdown.Divider />
												<Form.Check type="switch" id="custom-switch" label="Deep Links"
														value={state.isDeepLinks} 
														onChange={handleToggleDeepLinks}
												/>
										</NavDropdown>
								</Nav>
						</Navbar.Collapse>
				</Navbar>
		)
}

export default NavBarContainer;
