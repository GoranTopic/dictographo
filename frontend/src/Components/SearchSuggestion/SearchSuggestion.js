import React, { useState, useEffect } from 'react';
import { API_ENDPOINT }  from "../../myConfig";
import useKeypress from '../../hooks/useKeypress';
import './SearchSuggestion.css'; 

/*
 * =======================================
 *      Search suggestion componenet
 * =======================================
 * for predicting  what the user is going to type
 */

let query_search = 'querysearch/' //add this to myconfig

function SuggestionsContainer(props){
		/* tahek a child fro a input an add suggestions to it */
		// handle the change by seting the state variable to 
		let state = props.state
		let dispatchState = props.dispatchState;
		//let handleSearchSubmit =  props.handleSearchSubmit;
		const [suggestions, setSuggestions] = useState([])	
		const [selected, setSelected] = useState(0)	
		

		useKeypress('ArrowDown', () =>
				(selected < 0)?
				setSelected(suggestions.length-1)
				: setSelected(selected + 1)
		);

		useKeypress('ArrowUp', () => 
				(selected > suggestions.length-1)?
				setSelected(0)
				:setSelected(selected - 1)
		);

		useKeypress('Enter', () => {
				/* there is a bug where becuase the summit button is insdie the child component the 
				 * Enter input is registered twice and handle serach summit run twice.
				 * This caused duplicate links and nodes.
				 * I fixed this by adding a checker and addit the link ony if it is new link, 
				 * however the bug still there, beware*/
				if(isWrittingWord()){
						if(suggestions.length > 0){
								addToSearchTerm(suggestions[selected].word);
						}
				}else{
						/*
						if (event.keyCode === 13) {
								const form = event.target.form;
								const index = Array.prototype.indexOf.call(form, event.target);
								form.elements[index + 1].focus();
								event.preventDefault();
						}
						*/
						//handleSearchSubmit();
				}
		})

		const isWrittingWord = () =>{
				/* uses the state to see if
						* the user is in the middle of writting a word */
				let len = state.searchTerm.length;
				let last = state.searchTerm[state.searchTerm.length-1];
				if(len === 0){ return false;
				}else if (last === " "){ return false;
				}else return true; 
		}

		const filterSuggestions = suggestions => 
				/* filter out all words which have spaces */
				suggestions instanceof Array ? // if reques has been found
						suggestions.filter( suggestion => /\s/.test(suggestion)) : []

		const addToSearchTerm = (word) => {
				/* append a given word to the seate searchTerm */
				let wordList = state.searchTerm.split(" ");
				let len = wordList.length 
				wordList[len-1] = word // set the last word as clicke word
				dispatchState({ 
						type: 'SET_SEARCH_TERM',
						payload: wordList.join(" ") + " ",
				});	
				setSuggestions([]); // reset suggestions
				setSelected(0); // reset selected
		}

		const onClick = (word) => addToSearchTerm(word);

		useEffect(() => {
				/* query server for search suggestionsa
				 * and sets the  */
				let wordList = state.searchTerm.split(" ");
				//split the search into words
				let len = wordList.length;
				//get the length
				let last = wordList[len-1]
				//fetch the last element 
				fetch(API_ENDPOINT + query_search + last)
						.then(result => result.json()) //unpack suggestions
						.then(suggestions => filterSuggestions(suggestions))
						.then(suggestions => setSuggestions(suggestions))
						.catch((err) => console.log(err));
		}, [state.searchTerm, dispatchState])


		const SuggestionList = () =>
				<ul className="suggestions">
						{ suggestions.map(
								(suggestion, index) => {  
										return  <li 
												key={index} 
												className={index === selected? "selected": null}
												onClick={() => onClick(suggestion.word)}>
												{suggestion.word}
										</li>
								}
						)}
				</ul>

						return <div className="input">
								{props.children}
								{isWrittingWord()? <SuggestionList/>: <></> }
						</div>
}

export default SuggestionsContainer;
