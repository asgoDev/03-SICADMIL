import { useContext, useState } from "react";
import AppSectionLayout from "../AppSectionLayout";
import "../styles/inscripcion-militar-generator.css";
import ComplexInput from "./ComplexInput";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate, Link } from "react-router-dom";
import Planilla from "./Planilla";


function IncripcionMilitarGenerator() {
  let { isAllInputOk, setFormData } = useContext(GlobalContext);
  const [formStep, setFormStep] = useState('1')
  const navigate = useNavigate();

  const inputConfigPersonal = {
    ci: { id: "ci", label: "C.I.", type: "number", format: "", required: true },
    nombre: {
      id: "name",
      label: "Nombre",
      type: "",
      format: "",
      required: true,
    },
    apellido: {
      id: "lastname",
      label: "Apellido",
      type: "",
      format: "",
      required: true,
    },
    sexo: {
      id: "sex",
      label: "Sexo",
      type: "radio",
      options: ["Masculino", "Femenino"],
      format: "",
      required: true,
    },
    fechaDeNacimiento: {
      id: "birthdate",
      label: "Fecha de Nacimiento",
      type: "date",
      format: "",
      required: true,
    },
    edoCivil: {
      id: "edoCivil",
      label: "Estado Civil",
      type: "select",
      options: ["Soltero/a", "Divorciado/a", "Casado/a", "Viudo/a"],
      format: "",
      required: true,
    },
    rif: { id: "rif", label: "RIF", type: "", format: "" },
    picture: {
      id: "picture",
      label: "Foto",
      type: "file",
    },
    nacionalidad: {
      id: "nacionalidad",
      label: "Venezolano por...",
      type: "select",
      options: ["Nacimiento", "Naturalización"],
      format: "",
      required: true,
    },
    nroGaceta: {
      id: "nroGaceta",
      label: "Nro. Gaceta (GORBV N°#####)",
      type: "",
      format: "",
    },
    fechaGaceta: {
      id: "fechaGaceta",
      label: "Fecha de publicación de gaceta:",
      type: "date",
      format: "",
    },
    lugarNacimiento: {
      pais: {
        id: "paisNacimiento",
        label: "País",
        type: "",
        format: "",
        required: true,
      },
      estado: {
        id: "estadoNacimiento",
        label: "Estado",
        type: "",
        format: "",
        required: true,
      },
      municipio: {
        id: "municipioNacimiento",
        label: "Municipio",
        type: "",
        format: "",
        required: true,
      },
      parroquia: {
        id: "parroquiaNacimiento",
        label: "Parroquia",
        type: "",
        format: "",
        required: true,
      },
    },
    direccionDomiciliaria: {
      pais: {
        id: "paisDomicilio",
        label: "País",
        type: "",
        format: "",
        required: true,
      },
      estado: {
        id: "estadoDomicilio",
        label: "Estado",
        type: "",
        format: "",
        required: true,
      },
      municipio: {
        id: "municipioDomicilio",
        label: "Municipio",
        type: "",
        format: "",
        required: true,
      },
      parroquia: {
        id: "parroquiaDomicilio",
        label: "Parroquia",
        type: "",
        format: "",
        required: true,
      },
      via: {
        id: "viaDomicilio",
        label: "Vía",
        type: "",
        format: "",
        required: true,
      },
      area: {
        id: "areaDomicilio",
        label: "Área",
        type: "",
        format: "",
        required: true,
      },
      tipoInmueble: {
        id: "tipoInmueble",
        label: "Tipo Inmueble",
        type: "select",
        options: ["Casa", "Apartamento", "Quinta", "Edificio", "Local"],
        format: "",
        required: true,
      },
      nroInmueble: {
        id: "nroInmueble",
        label: "Nro. Inmueble",
        type: "",
        format: "",
        required: true,
      },
    },
    telefonoMovil: {
      id: "numeroMovil",
      label: "Tlf. Celular",
      type: "",
      format: "xxx-xxxx",
      required: true,
    },
    telefonoHabitacion: {
      id: "telefonoHabitacion",
      label: "Teléfono Habitación",
      type: "",
      format: "",
    },
    telefonoOficina: {
      id: "telefonoOficina",
      label: "Teléfono Oficina",
      type: "",
      format: "",
    },
    correoElectronico: {
      id: "correoElectronico",
      label: "Correo Electrónico",
      type: "email",
      format: "",
      required: true,
    },
    grupoSanguineo: {
      id: "grupoSanguineo",
      label: "Grupo Sanguíneo",
      type: "select",
      options: [
        "ARH+",
        "ARH-",
        "ABRH+",
        "ABRH-",
        "BRH+",
        "BRH-",
        "ORH+",
        "ORH-",
      ],
      format: "",
      required: true,
    },
    hijos: {
      id: "hijos",
      label: "Hijos",
      type: "radio",
      options: ["si", "no"],
      format: "",
      required: true,
    },
    elegible: {
      id: "elegible",
      label: "Elegible",
      type: "radio",
      options: ["si", "no"],
      format: "",
    },
    causa: { id: "causa", label: "Causa", type: "", format: "" },
  };

  const inputConfigSocio = {
    gradoInstruccion: {
      id: "educationLevel",
      label: "Grado de Instrucción",
      type: "select",
      options: ['Primaria', "Bachiller", "Técnico medio", 'TSU', 'Licenciado/a', 'Ingeniero/a', 'Magister', 'Doctor'],
      format: "",
      required: true,
    },
    estudia: {
      id: "isStudying",
      label: "¿Estudia?",
      type: "radio",
      options: ["si", "no"],
      format: "",
      required: true,
    },
    tipoEstudio: {
      id: "studyType",
      label: "Tipo de Estudio",
      format: "",
    },
    especialidad: {
      id: "specialization",
      label: "Especialidad",
      format: "",
    },
    institucion: {
      id: "institution",
      label: "Institución",
      type: "select",
      options: ["Pública", "Privada"],
      format: "",
    },
    nombreInstituto: {
      id: "instituteName",
      label: "Nombre del Instituto",
      format: "",
    },
    trabaja: {
      id: "isWorking",
      label: "¿Trabaja?",
      type: "radio",
      options: ["si", "no"],
      format: "",
      required: true,
    },
    ocupacionOficio: {
      id: "occupation",
      label: "Ocupación u Oficio",
      type: "",
      format: "",
      required: true,
    },
    empresa: {
      id: "company",
      label: "Empresa",
      format: "",
    },
    direccionEmpresa: {
      pais: {
        id: "companyCountry",
        label: "País",
        // type: "select",
        format: "",
      },
      estado: {
        id: "companyState",
        label: "Estado",
        // type: "select",
        format: "",
      },
      municipio: {
        id: "companyMunicipality",
        label: "Municipio",
        // type: "select",
        format: "",
      },
      parroquia: {
        id: "companyParish",
        label: "Parroquia",
        // type: "select",
        format: "",
      },
    },
    telefonoEmpresa: {
      id: "companyPhone",
      label: "Teléfono de la Empresa",
      format: "",
    },
  };

  const inputConfigMilitar = {
    instruccionPremilitar: {
      id: "preMilitaryTraining",
      label: "Instrucción Premilitar",
      type: "radio",
      options: ["si", "no"],
      format: "",
      required: true,
    },
    nombreInstituto: {
      id: "militaryInstituteName",
      label: "Nombre del Instituto",
      format: "",
    },
    servicioMilitar: {
      situacionActual: {
        id: "militaryServiceStatus",
        label: "Situación Actual",
        type: "select",
      options: ["Activo", "Reserva"],
        format: "",
      },
      componente: {
        id: "militaryServiceComponent",
        label: "Componente",
        format: "",
      },
      unidad: {
        id: "militaryServiceUnit",
        label: "Unidad",
        format: "",
      },
    },
    areaDesempeno: {
      id: "performanceArea",
      label: "Área de Desempeño",
      format: "",
    },
    especialidadMilitar: {
      id: "militarySpecialization",
      label: "Especialidad",
      format: "",
    },
    fechaIngreso: {
      id: "militaryEntryDate",
      label: "Fecha de Ingreso",
      type: "date",
      format: "dd-mm-aaaa",
    },
    fechaEgreso: {
      id: "militaryExitDate",
      label: "Fecha de Egreso",
      type: "date",
      format: "dd-mm-aaaa",
    },
    jerarquia: {
      id: "militaryRank",
      label: "Jerarquía",
      format: "",
    },
    profesionalMilitar: {
      situacionActual: {
        id: "militaryProfessionalStatus",
        label: "Situación Actual",
        format: "",
      },
      componente: {
        id: "militaryProfessionalComponent",
        label: "Componente",
        format: "",
      },
      categoria: {
        id: "militaryProfessionalCategory",
        label: "Categoría",
        format: "",
      },
      especialidadProfesional: {
        id: "professionalSpecialization",
        label: "Especialidad",
        format: "",
      },
      grado: {
        id: "militaryProfessionalGrade",
        label: "Grado",
        format: "",
      },
      fechaIngresoProfesional: {
        id: "professionalEntryDate",
        label: "Fecha de Ingreso",
        type: "date",
        format: "dd-mm-aaaa",
      },
      fechaEgresoProfesional: {
        id: "professionalExitDate",
        label: "Fecha de Egreso",
        type: "date",
        format: "dd-mm-aaaa",
      },
    },
    miliciaBolivariana: {
      gradoJerarquia: {
        id: "militiaRank",
        label: "Grado/Jerarquía",
        format: "",
      },
      areaDefensaIntegral: {
        id: "integralDefenseArea",
        label: "Área de Defensa Integral",
        format: "",
      },
      cuerpoCombatiente: {
        id: "combatantCorps",
        label: "Cuerpo Combatiente",
        format: "",
      },
      batallonMilicia: {
        id: "militiaBattalion",
        label: "Batallón de Milicia",
        format: "",
      },
      fechaIngresoMilicia: {
        id: "militiaEntryDate",
        label: "Fecha de Ingreso",
        type: "date",
        format: "dd-mm-aaaa",
      },
    },
  };

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
            {/* <div className="botones-de-prueba">
              <a href="#personal-section">Personal </a>
              <a href="#socio-econom-section">Socio </a>
              <a href="#militar-section">Militar</a>
            </div> */}
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
            </fieldset>

            <fieldset className="form__fieldset">
              <legend className="form__legend">Área Militar</legend>
              <ComplexInput inputConfig={inputConfigMilitar.areaDesempeno} />
              <ComplexInput
                inputConfig={inputConfigMilitar.especialidadMilitar}
              />
              <ComplexInput inputConfig={inputConfigMilitar.fechaIngreso} />
              <ComplexInput inputConfig={inputConfigMilitar.fechaEgreso} />
              <ComplexInput inputConfig={inputConfigMilitar.jerarquia} />
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
            <input className="form__submit" type="submit" value={"Generar planilla"} disabled={!isAllInputOk} />
             {/* <Link to="/SICADMIL/preview"><input className="form__submit" type="submit" value={"Generar planilla"} disabled={!isAllInputOk} /></Link> */}
          </section>
        </div>
      </form>
      <div className="form__navigation">
        <a href={`#personal-section`} className={`${formStep == '1' && 'form-step--selected'}`} onClick={handleSteps}>1</a>
        <a href={`#socio-econom-section`} className={`${formStep == '2' && 'form-step--selected'}`} onClick={handleSteps}>2</a>
        <a href={`#militar-section`}  className={`${formStep == '3' && 'form-step--selected'}`} onClick={handleSteps}>3</a>
      </div>
    </AppSectionLayout>
  );
}

export default IncripcionMilitarGenerator;
