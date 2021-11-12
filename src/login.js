import React, {useState, useEffect, useRef} from 'react';
import { Stack, Container, Form, Button, Card, Row, Col, Image } from "react-bootstrap";
import monster from './assets/monster1.png';
import lottie from 'lottie-web';
import googleImage from './assets/google.png';
import monster1 from './assets/monster1.png';


const Login = () => {



    const [estaRegistrandose, setEstaRegistrandose] = useState(false);
    return (

        <div class="container bg-white  w-80 mt-5 shadow">
            <div class="row align-items-stretch">
                <div class="col d-flex justify-content-center d-none d-lg-block col-md-5 col-lg-5 col-lg-6">
                <Image src={monster1} class=""/>
                </div>
                <div class="col bg-white p-5" >
                    <div class="text-end">
                        <img src=""/>
                    </div>
                    <h2 class="fw-bold text-center py-5">Bienvenido</h2>


                    <Form action="#">
                    <h1> {estaRegistrandose ? "Registrame" : "Iniciar sesión"} </h1>
                    <Form>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label>Correo</Form.Label>
                                 <Form.Control type="email" placeholder="Correo" />
                             </Form.Group>

                             <Form.Group className="mb-3" controlId="formBasicPassword">
                                 <Form.Label>Contaseña</Form.Label>
                                 <Form.Control type="password" placeholder="Contraseña" />
                             </Form.Group>
                             <br/>

                                <div class="d-grid">
                                     <Button  type="submit" class="btn btn-primary">
                                         {estaRegistrandose ? "Registrame" : "Iniciar sesión"}
                                     </Button>
                                 </div>
                                 <br/>
                                 <div class="d-grid">
                                 <Button type="submit" class="btn btn-outline-primary w-100 my-1" variant="success" onClick = {()=> setEstaRegistrandose(!estaRegistrandose)}>
                                                {estaRegistrandose
                                                ? "¿Ya tienes cuenta? Iniciar sesión " 
                                                : "¿No tienes cuenta? Regístrate"}
                                            </Button> 
                                </div>
                         </Form>   
                    
                        <br/>
                            
                        
                        </Form>

                        <div class="d-grid">
                                    <div class="row text-center">
                                        <div class="col-12">Iniciar Sesión</div>
                                    </div>
                                    <br/>
                                    <div class="row">
                                        <div class="d-grid"> 
                                        <Button class="btn btn-outline-primary w-100 my-1">
                                            <div class="row align-items-center">
                                                <div class="col-2 d-none d-md-block d-none d-md-block">
                                                <Image src={googleImage} width="20" alt=""/>
                                                </div>

                                                <div class="col-10 text-center">
                                                Ingresar con Google
                                                </div>
                                            </div>
                                        </Button>
                                        </div>
                                    </div>
                                
                        </div>

                </div>
            </div>
        </div>



        // <div style={{display: 'flex', justifyContent: 'center', alignItemns: 'center, '}}>
        // <Card style={{ width: '50rem', height: '30rem' }}>
        //     <Container>
                
        //         <Row>
                    
        //             <Col xs={6}>
        //                 <Stack gap={3}>
        //                 <h1> {estaRegistrandose ? "Registrame" : "Iniciar sesión"} </h1>
        //                 <Form>
        //                     <Form.Group className="mb-3" controlId="formBasicEmail">
        //                         <Form.Label>Correo</Form.Label>
        //                         <Form.Control type="email" placeholder="Correo" />
        //                     </Form.Group>

        //                     <Form.Group className="mb-3" controlId="formBasicPassword">
        //                         <Form.Label>Contaseña</Form.Label>
        //                         <Form.Control type="password" placeholder="Contraseña" />
        //                     </Form.Group>
        //                     <Button variant="primary" type="submit">
        //                         {estaRegistrandose ? "Registrame" : "Iniciar sesión"}
        //                     </Button>
        //                 </Form>    
        //                 <Button variant="primary" type="submit" style={{width: "300px"}}>
        //                         Acceder con Google
        //                     </Button>       

        //                     <Button 
        //                     style={{width: "300px"}}
        //                     variant="secondary" 
        //                     onClick = {()=> setEstaRegistrandose(!estaRegistrandose)}
        //                     >
        //                         {estaRegistrandose
        //                         ? "¿Ya tienes cuenta? Iniciar sesión" 
        //                         : "¿No tienes cuenta? Regístrate"}
        //                     </Button>
                            
        //                  </Stack>
        //              </Col>

        //              <Col>
        //                     <div style={{display: 'flex', justifyContent: 'center', alignItemns: 'center, '}}>HOLAAFvfdbgdfsgdsfggsdfgssdfgsdfASDFSD</div>
                     
        //             </Col>
        //         </Row>

    
    

        //     </Container>      
        // </Card>

        // </div>

    )
};

export default Login;