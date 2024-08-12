import React from "react";
import { Tarea } from "./Tarea";

type ListaTareasProps = {
    listaTareas: string[];
    borrarTarea: (index: number) => void;
};

export const ListaTareas: React.FC<ListaTareasProps> = ({ listaTareas, borrarTarea }) => {
    return (
        <div className="taskList">
            {listaTareas.map((tarea, index) => (
                <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)} />
            ))}
        </div>
    );
};
