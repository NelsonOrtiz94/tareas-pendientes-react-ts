import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const ToDoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState<string>("");
    const [listaTareas, setListaTareas] = useState<string[]>([]);

    const handleAddTask = () => {
        if (nuevaTarea.trim() === "") return;
        setListaTareas((tareasAnteriores) => [...tareasAnteriores, nuevaTarea]);
        setNuevaTarea("");
    };

    const handleBorrarTarea = (index: number) => {
        setListaTareas((tareas) => tareas.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Lista de Pendientes</h1>
            <div>
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    placeholder="Nuevo Pendiente"
                />
                <button onClick={handleAddTask}>Agregar Pendiente</button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} />
        </div>
    );
};
