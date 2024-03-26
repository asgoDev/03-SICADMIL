import { useContext, useEffect, useState } from "react";
import AppSectionLayout from "../AppSectionLayout";
import "../styles/inscripcion-militar-generator.css";
import ComplexInput from "./ComplexInput";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate, Link } from "react-router-dom";
import { inputConfigPersonal, inputConfigSocio, inputConfigMilitar } from '../data/formConfig'
import Planilla from "./Planilla";


function IncripcionMilitarGenerator() {
  let { isAllInputOk, setFormData } = useContext(GlobalContext);
  const [formStep, setFormStep] = useState('1')
  const navigate = useNavigate();

  useEffect(()=>{
    // crear funcion que me enfoque el primer section del form al actualizar la pagina
    // if (formStep == '1'){
    //   let button = document.querySelector('.form-step--first')
    //   button.click()
    // }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formDataObject = {};
    for (let [key, value] of data.entries()) {
      formDataObject[key] = value;
    }
    setFormData(formDataObject);
    navigate("/SICADMIL/preview");
  };

  const handleSteps =(e)=>{
    setFormStep(e.target.innerText)
  }

  return (
    <AppSectionLayout title={"Planilla de Inscripción Militar"}>
        
      <form className="form" action="#" onSubmit={handleSubmit}>
        <div className="form__section-container">
          <section id="personal-section" className={`form__section ${formStep == '1' && 'form__section--onfocus'}`}>
            <h2 className="form__subtitle">1.-Información Personal</h2>
            <fieldset className="form__fieldset">
              <legend className="form__legend">Datos personales</legend>

              <ComplexInput inputConfig={inputConfigPersonal.ci} />
              <ComplexInput inputConfig={inputConfigPersonal.apellido} />
              <ComplexInput inputConfig={inputConfigPersonal.nombre} />
              <ComplexInput
                inputConfig={inputConfigPersonal.fechaDeNacimiento}
              />
              <ComplexInput inputConfig={inputConfigPersonal.sexo} />
              <ComplexInput inputConfig={inputConfigPersonal.edoCivil} />
              <ComplexInput inputConfig={inputConfigPersonal.rif} />
              <ComplexInput inputConfig={inputConfigPersonal.picture} />
            </fieldset>

            <fieldset className="form__fieldset">
              <legend className="form__legend">Nacionalidad</legend>
              <ComplexInput inputConfig={inputConfigPersonal.nacionalidad} />
              <ComplexInput inputConfig={inputConfigPersonal.nroGaceta} />
              <ComplexInput inputConfig={inputConfigPersonal.fechaGaceta} />
            </fieldset>
            <fieldset className="form__fieldset">
              <legend className="form__legend">Lugar de nacimiento</legend>
              <ComplexInput
                inputConfig={inputConfigPersonal.lugarNacimiento.pais}
              />
              <ComplexInput
                inputConfig={inputConfigPersonal.lugarNacimiento.estado}
              />
              <ComplexInput
                inputConfig={inputConfigPersonal.lugarNacimiento.municipio}
              />
              <ComplexInput
                inputConfig={inputConfigPersonal.lugarNacimiento.parroquia}
              />
            </fieldset>
            <fieldset className="form__fieldset">
              <legend className="form__legend">
                Información de residencia
              </legend>
              <ComplexInput
                inputConfig={inputConfigPersonal.direccionDomiciliaria.pais}
              />
              <ComplexInput
                inputConfig={inputConfigPersonal.direccionDomiciliaria.estado}
              />
              <ComplexInput
                inputConfig={
                  inputConfigPersonal.direccionDomiciliaria.municipio
                }
              />
              <ComplexInput
                inputConfig={
                  inputConfigPersonal.direccionDomiciliaria.parroquia
                }
              />
              <ComplexInput
                inputConfig={inputConfigPersonal.direccionDomiciliaria.via}
              />
              <ComplexInput
                inputConfig={inputConfigPersonal.direccionDomiciliaria.area}
              />
              <ComplexInput
                inputConfig={
                  inputConfigPersonal.direccionDomiciliaria.tipoInmueble
                }
              />
              <ComplexInput
                inputConfig={
                  inputConfigPersonal.direccionDomiciliaria.nroInmueble
                }
              />
            </fieldset>
            <fieldset className="form__fieldset">
              <legend className="form__legend">Contacto</legend>
              <ComplexInput inputConfig={inputConfigPersonal.telefonoMovil} />
              <ComplexInput
                inputConfig={inputConfigPersonal.telefonoHabitacion}
              />
              <ComplexInput inputConfig={inputConfigPersonal.telefonoOficina} />
              <ComplexInput
                inputConfig={inputConfigPersonal.correoElectronico}
              />
              <ComplexInput inputConfig={inputConfigPersonal.grupoSanguineo} />
              <ComplexInput inputConfig={inputConfigPersonal.hijos} />
              <ComplexInput inputConfig={inputConfigPersonal.elegible} />
              <ComplexInput inputConfig={inputConfigPersonal.causa} />
            </fieldset>
            {/* <div className="botones-de-prueba">
              <a href="#personal-section">Personal </a>
              <a href="#socio-econom-section">Socio </a>
              <a href="#militar-section">Militar</a>
            </div> */}
            <p className="form__advise">Todos los campos marcados con asterisco (<span className="form__advise-span">*</span>) son obligatorios</p>

          </section>
          <section id="socio-econom-section" className={`form__section ${formStep == '2' && 'form__section--onfocus'}`}>
            <h2 className="form__subtitle">2.-Información Socio-económica</h2>
            <fieldset className="form__fieldset">
              <legend className="form__legend">Estudios</legend>
              <ComplexInput inputConfig={inputConfigSocio.gradoInstruccion} />
              <ComplexInput inputConfig={inputConfigSocio.especialidad} />
              <ComplexInput inputConfig={inputConfigSocio.estudia} />
              <ComplexInput inputConfig={inputConfigSocio.institucion} />
              <ComplexInput inputConfig={inputConfigSocio.nombreInstituto} />
            </fieldset>
            <fieldset className="form__fieldset">
              <legend className="form__legend">Laboral</legend>
              <ComplexInput inputConfig={inputConfigSocio.trabaja} />
              <ComplexInput inputConfig={inputConfigSocio.ocupacionOficio} />
              <ComplexInput inputConfig={inputConfigSocio.empresa} />
              <ComplexInput
                inputConfig={inputConfigSocio.direccionEmpresa.pais}
              />
              <ComplexInput
                inputConfig={inputConfigSocio.direccionEmpresa.estado}
              />
              <ComplexInput
                inputConfig={inputConfigSocio.direccionEmpresa.municipio}
              />
              <ComplexInput
                inputConfig={inputConfigSocio.direccionEmpresa.parroquia}
              />
              <ComplexInput inputConfig={inputConfigSocio.telefonoEmpresa} />
            </fieldset>
            <p className="form__advise">Todos los campos marcados con asterisco (<span className="form__advise-span">*</span>) son obligatorios</p>
          </section>
          <section id="militar-section" className={`form__section ${formStep == '3' && 'form__section--onfocus'}`}>
            <h2 className="form__subtitle">3.-Información Militar</h2>
            <fieldset className="form__fieldset">
              <legend className="form__legend">Instrucción Premilitar</legend>
              <ComplexInput
                inputConfig={inputConfigMilitar.instruccionPremilitar}
              />
              <ComplexInput inputConfig={inputConfigMilitar.nombreInstituto} />
            </fieldset>

            <fieldset className="form__fieldset">
              <legend className="form__legend">Servicio Militar</legend>
              <ComplexInput
                inputConfig={inputConfigMilitar.servicioMilitar.situacionActual}
              />
              <ComplexInput
                inputConfig={inputConfigMilitar.servicioMilitar.componente}
              />
              <ComplexInput
                inputConfig={inputConfigMilitar.servicioMilitar.unidad}
              />
              <ComplexInput inputConfig={inputConfigMilitar.servicioMilitar.areaDesempeno} />
              <ComplexInput
                inputConfig={inputConfigMilitar.servicioMilitar.especialidadMilitar}
              />
              <ComplexInput inputConfig={inputConfigMilitar.servicioMilitar.fechaIngreso} />
              <ComplexInput inputConfig={inputConfigMilitar.servicioMilitar.fechaEgreso} />
              <ComplexInput inputConfig={inputConfigMilitar.servicioMilitar.jerarquia} />
            </fieldset>

            <fieldset className="form__fieldset">
              <legend className="form__legend">Profesional Militar</legend>
              <ComplexInput
                inputConfig={
                  inputConfigMilitar.profesionalMilitar.situacionActual
                }
              />
              <ComplexInput
                inputConfig={inputConfigMilitar.profesionalMilitar.componente}
              />
              <ComplexInput
                inputConfig={inputConfigMilitar.profesionalMilitar.categoria}
              />
              <ComplexInput
                inputConfig={
                  inputConfigMilitar.profesionalMilitar.especialidadProfesional
                }
              />
              <ComplexInput
                inputConfig={inputConfigMilitar.profesionalMilitar.grado}
              />
              <ComplexInput
                inputConfig={
                  inputConfigMilitar.profesionalMilitar.fechaIngresoProfesional
                }
              />
              <ComplexInput
                inputConfig={
                  inputConfigMilitar.profesionalMilitar.fechaEgresoProfesional
                }
              />
            </fieldset>

            <fieldset className="form__fieldset">
              <legend className="form__legend">Milicia Bolivariana</legend>
              <ComplexInput
                inputConfig={
                  inputConfigMilitar.miliciaBolivariana.gradoJerarquia
                }
              />
              <ComplexInput
                inputConfig={
                  inputConfigMilitar.miliciaBolivariana.areaDefensaIntegral
                }
              />
              <ComplexInput
                inputConfig={
                  inputConfigMilitar.miliciaBolivariana.cuerpoCombatiente
                }
              />
              <ComplexInput
                inputConfig={
                  inputConfigMilitar.miliciaBolivariana.batallonMilicia
                }
              />
              <ComplexInput
                inputConfig={
                  inputConfigMilitar.miliciaBolivariana.fechaIngresoMilicia
                }
              />
            </fieldset>
            <p className="form__advise">Todos los campos marcados con asterisco (<span className="form__advise-span">*</span>) son obligatorios</p>

            <input className="form__submit" type="submit" value={"Generar planilla"} disabled={!isAllInputOk} />
             {/* <Link to="/SICADMIL/preview"><input className="form__submit" type="submit" value={"Generar planilla"} disabled={!isAllInputOk} /></Link> */}
          </section>
        </div>
      </form>
      <div className="form__navigation">
        <a href={`#personal-section`} className={`form-step--first ${formStep == '1' && 'form-step--selected'}`} onClick={handleSteps}>1</a>
        <a href={`#socio-econom-section`} className={`${formStep == '2' && 'form-step--selected'}`} onClick={handleSteps}>2</a>
        <a href={`#militar-section`}  className={`${formStep == '3' && 'form-step--selected'}`} onClick={handleSteps}>3</a>
      </div>
    </AppSectionLayout>
  );
}

export default IncripcionMilitarGenerator;
