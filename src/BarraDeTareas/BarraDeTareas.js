import React from "react";
import "./BarraDeTareas.css"

function BarraDeTareas(){
    return(
        <div className = "BarraDeTareas_Container">
            <ul className = "BarraDeTareas_Container_ul">
            <div className = "BarraDeTareas_Container_ul_div"> 
                <input placeholder = "   ¿Que estás buscando?"/>
            </div>
            <div className = "BarraDeTareas_Container_ul_div">
                <button >Nueva Tarea</button>
            </div>
            <div className = "BarraDeTareas_Container_ul_div">
                <button>volver</button>
            </div>
            </ul>
        </div>
    )

}

export default BarraDeTareas;
