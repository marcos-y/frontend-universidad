import React from 'react';
import Table from 'react-bootstrap/Table';

const DefaultTable = (props) => {

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Año</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.alumnos.map((alumno, index) => {
                            if(alumno.materias_aprobadas>=3 && alumno.nombre!=null)
                            {
                                 return (
                                <tr key={index}>
                                    <td>{alumno.nombre}</td>
                                    <td>{alumno.apellido}</td>
                                    <td>{alumno.anio}</td>
                                </tr>)
                            }
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default DefaultTable