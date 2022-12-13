import React from 'react';
import Table from 'react-bootstrap/Table';

const DefaultTable = (props) => {

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Año</th>
                        <th>Materia</th>
                        <th>Condicion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.alumnos.map((alumno, index) => {
                            return (
                                <tr key={index}>
                                    <td>{alumno.id}</td>
                                    <td>{alumno.nombre}</td>
                                    <td>{alumno.apellido}</td>
                                    <td>{alumno.año}</td>
                                    <td>{alumno.materia}</td>
                                    <td>{alumno.condicion}</td>
                                </tr>)
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default DefaultTable