import React, {useState, useEffect, useRef} from 'react';
import { Stack, Container, Form, Button, Card, Row, Col, Image } from "react-bootstrap";
import monster from './assets/monster1.png';
import lottie from 'lottie-web';
import googleImage from './assets/google.png';
import monster1 from './assets/monster1.png';
import logoCun from './assets/logoCun.png';
import firebase from './Firebase/firebase';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider} from "firebase/auth";
import {signInGoogle} from './Firebase/auth';
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const Login = () => {

    const [estaRegistrandose, setEstaRegistrandose] = useState(false);

    async function submitHandler(e){
        e.preventDefault();
        const correo = e.target.formBasicEmail.value;
        const contra = e.target.formBasicPassword.value;


        if (estaRegistrandose){
            const usuario = await createUserWithEmailAndPassword(auth, correo, contra);
            console.log(usuario);
        } else {
            signInWithEmailAndPassword(auth, correo, contra);
        }

    }


    return (
        <Container>
        <div class="container w-75 bg-white mt-5 shadow">
            <div class="row align-items-stretch">
                <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6">

                </div>
                <div class="col">
                <div class="text-center pt-5">
                    <Image src={logoCun} width="80" />
                    </div>
                    <h2 class="fw-bold text-center py-5">{estaRegistrandose ? "Registrar" : "Iniciar sesión"}</h2>

                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div class="d-grid">
                        <Button variant="primary" type="submit">
                            {estaRegistrandose ? "Registrar" : "Iniciar"}
                        </Button>
                        </div>
                        <br/>
                        <div class="d-grid my-3">
                        <Button  variant="primary" onClick={signInGoogle}>Login Google</Button>
                        </div>
                        <div class="d-grid my-3">
                        <Button variant="danger" onClick={()=> setEstaRegistrandose(!estaRegistrandose)}>
                            {estaRegistrandose ? "Iniciar sesión" : "¿Usuario nuevo? Registrate"}
                        </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default Login;