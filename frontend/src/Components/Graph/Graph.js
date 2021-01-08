import React, { useCallback }  from 'react';
import { Graph } from "react-d3-graph";
import { onClickNode } from '../../node_functions';
import { graphConfig }  from "../../myConfig";
//import d3Switcher from "./d3Switcher";
import ForceGraph2D from 'react-force-graph-2d';
import ForceGraph3D from 'react-force-graph-3d';
import _ from "lodash";
//import ForceGraphVR from 'react-force-graph-vr';
//import ForceGraphAR from 'react-force-graph-ar';

/*
 * =======================================
 *      Graph Componente for React 
 * =======================================
 */

function GraphContainer({state, dispatchState}){

		const stateCopy = (state) => {
				//console.log("normal state")
				//console.log(state)
				let d3State = _.cloneDeep(state);
				return d3State;
		}

		const handleClick = useCallback((nodeId) =>   //  handle click of node
				(nodeId instanceof String)? 
				onClickNode(nodeId, state, dispatchState)
				: onClickNode(nodeId.id, state, dispatchState),
				[state, dispatchState]);
				
		const chosenGraph = (type) =>{ 
				switch(type) {
						case 'd3':
								console.log("checking the state")
								console.log(state)
								//console.log({...state, links:[]})
								console.log("d3 data:")
								console.log(state.d3Data)
								return <Graph 
										id="graph-id" 
										// id is mandatory, 
										// if no id is defined rd3g will throw an error
										data={state.d3Data}
										onClickNode={handleClick}
										config={graphConfig}
								/>
						case '2D':
								console.log("checking the state")
								console.log(state)
								console.log("2D data:")
								console.log(state.forceData)
								return <ForceGraph2D
										graphData={state.forceData}
										enableNodeDrag={true}
										onNodeClick={handleClick}
								/>;
						case '3D':
								//console.log(state)
								return <ForceGraph3D
										enableNodeDrag={true}
										onNodeClick={handleClick}
										graphData={state.forceData}
								/>;
						default:
								//console.log(state)
								return <Graph 
										id="graph-id" 
										// id is mandatory, 
										// if no id is defined rd3g will throw an error
										data={state}
										config={graphConfig}
										onClickNode={handleClick}
								/>
				} 
		}


		return <div style={{backgroundImage: 'url(./grid.png)'}} >
				{chosenGraph(state.graphType)}
		</div>
		
}

export default GraphContainer;