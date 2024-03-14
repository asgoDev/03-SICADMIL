import AppSectionLayout from "../AppSectionLayout";
import "../styles/inscripcion-militar-generator.css";
import ComplexInput from "./ComplexInput";

function IncripcionMilitarGenerator() {
  const inputConfigPersonal = {
    ci: {
      id: "ci",
      label: "C.I.",
      element: "input",
      type: "",
    },
    nombre: {
      id: "name",
      label: "Nombre",
      format: "",
    },
    apellido: {
      id: "lastname",
      label: "Apellido",
      element: "input",

      format: "",
    },
    sexo: {
      id: "sex",
      label: 'Sexo',
      type: "radio",
      options: ["Masculino", "Femenino"],
      format: "",
    },
    fechaDeNacimiento: {
      id: "birthdate",
      label: "Fecha de Nacimiento",
      format: "",
      type: "date",
    },
    edoCivil: {
      id: "edoCivil",
      label: "Estado Civil",
      type: "select",
      options: ["Soltero/a", "Divorciado/a", "Casado/a", "Viudo/a"],
      format: "",
    },
    rif: {
      id: "rif",
      label: "RIF",
      format: "",
    },
    nacionalidad: {
      id: "nacionalidad",
      label: "Venezolano por...",
      type: "select",
      options: ["Nacimiento", "Naturalización"],
      format: "",
    },
    nroGaceta: {
      id: "nroGaceta",
      label: "Nro. Gaceta (GORBV N°#####)",
      format: "",
    },
    fechaGaceta: {
      id: "fechaGaceta",
      label: "Fecha de publicación de gaceta:",
      format: "",
      type: "date",
    },
    lugarNacimiento: {
      pais: {
        id: "paisNacimiento",
        label: "País",
        format: "",
      },
      estado: {
        id: "estadoNacimiento",
        label: "Estado",
        format: "",
      },
      municipio: {
        id: "municipioNacimiento",
        label: "Municipio",
        format: "",
      },
      parroquia: {
        id: "parroquiaNacimiento",
        label: "Parroquia",
        format: "",
      },
    },
    direccionDomiciliaria: {
      pais: {
        id: "paisDomicilio",
        label: "País",
        format: "",
      },
      estado: {
        id: "estadoDomicilio",
        label: "Estado",
        format: "",
      },
      municipio: {
        id: "municipioDomicilio",
        label: "Municipio",
        format: "",
      },
      parroquia: {
        id: "parroquiaDomicilio",
        label: "Parroquia",
        format: "",
      },
      via: {
        id: "viaDomicilio",
        label: "Vía",
        format: "",
      },
      area: {
        id: "areaDomicilio",
        label: "Área",
        format: "",
      },
      tipoInmueble: {
        id: "tipoInmueble",
        label: "Tipo Inmueble",
        type: "select",
        options: ["Casa", "Apartamento", "Quinta", "Edificio", "Local"],
        format: "",
      },
      nroInmueble: {
        id: "nroInmueble",
        label: "Nro. Inmueble",
        format: "",
      },
    },
    telefonoMovil: {
      id: "numeroMovil",
      label: "Tlf. Celular",
      format: "xxx-xxxx",
    },
    telefonoHabitacion: {
      id: "telefonoHabitacion",
      label: "Teléfono Habitación",
      format: "",
    },
    telefonoOficina: {
      id: "telefonoOficina",
      label: "Teléfono Oficina",
      format: "",
    },
    correoElectronico: {
      id: "correoElectronico",
      label: "Correo Electrónico",
      format: "",
      type: "email",
    },
    grupoSanguineo: {
      id: "grupoSanguineo",
      label: "Grupo Sanguíneo",
      type: 'select',
      options: ['ARH+', 'ARH-','ABRH+', 'ABRH-','BRH+', 'BRH-','ORH+', 'ORH-'],
      format: "",
    },
    hijos: {
      id: "hijos",
      label: "Hijos",
      type: "radio",
      options: ["Si", "No"],
      format: "",
    },
    elegible: {
      id: "elegible",
      label: "Elegible",
      type: "radio",
      options: ["Si", "No"],
      format: "",

    },
    causa: {
      id: "causa",
      label: "Causa",
      format: "",
    },
  };

  const inputConfigSocio = {
    gradoInstruccion: {
      id: "educationLevel",
      label: "Grado de Instrucción",
      format: "",
      type: "select",
    },
    estudia: {
      id: "isStudying",
      label: "¿Estudia?",
      format: "",
      // type: "radio",
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
      format: "",
      type: "select",
    },
    nombreInstituto: {
      id: "instituteName",
      label: "Nombre del Instituto",
      format: "",
    },
    trabaja: {
      id: "isWorking",
      label: "¿Trabaja?",
      format: "",
      // type: "radio",
    },
    ocupacionOficio: {
      id: "occupation",
      label: "Ocupación u Oficio",
      format: "",
      type: "select",
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
        format: "",
        type: "select",
      },
      estado: {
        id: "companyState",
        label: "Estado",
        format: "",
        type: "select",
      },
      municipio: {
        id: "companyMunicipality",
        label: "Municipio",
        format: "",
        type: "select",
      },
      parroquia: {
        id: "companyParish",
        label: "Parroquia",
        format: "",
        type: "select",
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
      format: "",
      // type: "radio",
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
      format: "dd-mm-aaaa",
    },
    fechaEgreso: {
      id: "militaryExitDate",
      label: "Fecha de Egreso",
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
        format: "dd-mm-aaaa",
      },
      fechaEgresoProfesional: {
        id: "professionalExitDate",
        label: "Fecha de Egreso",
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
        format: "dd-mm-aaaa",
      },
    },
  };

  return (
    <AppSectionLayout title={"Planilla de Inscripción Militar"}>
      <form className="form" action="#" onSubmit={(e)=>{
        e.preventDefault()
        console.log(e.target.sex.value);
      }}>
        <div className="form__section-container">
          <section id="personal-section" className="form__section">
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
                inputConfig={inputConfigPersonal.lugarNacimiento.parroquia}
              />
              <ComplexInput
                inputConfig={inputConfigPersonal.lugarNacimiento.municipio}
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
                  inputConfigPersonal.direccionDomiciliaria.parroquia
                }
              />
              <ComplexInput
                inputConfig={
                  inputConfigPersonal.direccionDomiciliaria.municipio
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
            <div className="botones-de-prueba">
              <a href="#personal-section">Personal </a>
              <a href="#socio-econom-section">Socio </a>
              <a href="#militar-section">Militar</a>
            </div>
          </section>
          <section id="socio-econom-section" className="form__section">
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
            <div className="botones-de-prueba">
              <a href="#personal-section">Personal </a>
              <a href="#socio-econom-section">Socio </a>
              <a href="#militar-section">Militar</a>
            </div>
          </section>
          <section id="militar-section" className="form__section">
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
            <div className="botones-de-prueba">
              <a href="#personal-section">Personal </a>
              <a href="#socio-econom-section">Socio </a>
              <a href="#militar-section">Militar</a>
            </div>
          </section>
        </div>
        <input type="submit" value={'enviar'} />
      </form>
    </AppSectionLayout>
  );
}

export default IncripcionMilitarGenerator;
