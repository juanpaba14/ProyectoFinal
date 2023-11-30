import imagen1 from "../assets/desing/ImagenCa1.jpg"
import imagen2 from "../assets/desing/ImagenCa3.jpg"
import imagen3 from "../assets/desing/ImagenCa4.jpg"
const Carousel = () => { 
    return(
        <>
         <div id="carouselExample" className="carousel slide text-center">
                <div class="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            className="d-block mx-auto"
                            src={imagen1}
                            alt="" height="500" width="700" />
                            <div class="carousel-caption d-md-block">
        <h2 className=" badge text-bg-dark " style={{
            fontSize:"25px",
            borderRadius:"20px",
            margin:"220px"
        }}>Como las drogas afectan nuestro organismo
        <br /> 
        <br />
        <h3 style={{
            fontSize:"15px"
        }}>Es importante tener en cuenta que los efectos de las drogas en el
        <br />
         organismo pueden variar dependiendo del tipo de droga, la dosis, 
         <br />la frecuencia de uso y las
         <br />
          características individuales de cada persona</h3> 
          </h2>
        <br />
        <a href="https://www.youtube.com/watch?v=Ulfd_07gqGM" target="_blank" type="button" className="btn btn-dark btn-vert">Informate</a>
        
      </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block mx-auto"
                            src={imagen2}
                            alt="" height="500" width="700" />
                               <div class="carousel-caption d-md-block">
        <h2 className=" badge text-bg-dark " style={{
            fontSize:"25px",
            borderRadius:"20px",
            margin:"220px"
        }}>Centros de ayuda 
        <br /> 
        <br />
        <h3 style={{
            fontSize:"15px"
        }}>Las persona que 
        Los centros de ayuda de adicciones son lugares donde las personas 
        <br />
        pueden recibir apoyo y tratamiento para superar 
        <br />
        problemas de adicción a sustancias como drogas o alcohol. Estos centros 
        <br />
        ofrecen una variedad de servicios y programas diseñados para ayudar 
        <br />
        a las personas a recuperarse y mantenerse sobrias. </h3> 
          </h2>
        <br />
        <a href="https://fundacionnuevorumbo.com.co/la-fundacion/" target="_blank" type="button" className="btn btn-dark btn-vert">Informate</a>
        
      </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block mx-auto"
                            src={imagen3}
                            alt="" height="500" width="700" />
                            <div class="carousel-caption d-md-block">
        <h2 className=" badge text-bg-dark " style={{
            fontSize:"25px",
            borderRadius:"20px",
            margin:"220px"
        }}>No eres el unico
        <br /> 
        <br />
        <h3 style={{
            fontSize:"15px"
        }}>Ya muchos han pasado por las experencias de las drogas
        <br />
         y todo lo que conlleva en probarlas escucgar historias sobre las demas 
         <br />personas ayuda a comprender que es lo que pasa con tu vida 
         <br />
         y con la de las demas personas que te rodean
         </h3> 
          </h2>
        <br />
        <a href="https://www.youtube.com/watch?v=oy3J4anhHak" target="_blank" type="button" className="btn btn-dark btn-vert">Informate</a>
        
      </div>
                    </div>


                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
 }
 export default Carousel