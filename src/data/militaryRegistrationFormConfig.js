const personalConfigData = {
  id: "personal-section",
  title: "1.-Información Personal",
  config: [
    {
      fieldsetName: "Datos Personales",
      inputList: [
        {
          id: "ci",
          label: "C.I.",
          type: "number",
          format: "",
          required: true,
          title:
            "Deberá colocar el N° de la cedula de identidad Venezolana. Ejemplo: 20453266.",
        },
        {
          id: "name",
          label: "Nombres",
          type: "",
          format: "",
          required: true,
          title:
            "Deberá colocar los apellidos completos que aparecen en su cedula de identidad.",
        },
        {
          id: "lastname",
          label: "Apellidos",
          type: "",
          title:
            "Deberá colocar los nombres completos que aparecen en su cedula de identidad.",
          format: "",
          required: true,
        },
        {
          id: "sex",
          label: "Sexo",
          type: "radio",
          options: ["Masculino", "Femenino"],
          title: "",
          format: "",
          required: true,
        },
        {
          id: "birthdate",
          label: "Fecha de Nacimiento",
          type: "date",
          title:
            "Deberá colocar la fecha de nacimiento en el formato (dd/mm/aaaa).",
          format: "",
          required: true,
        },
        {
          id: "edoCivil",
          label: "Estado Civil",
          type: "select",
          options: ["Soltero/a", "Divorciado/a", "Casado/a", "Viudo/a"],
          title:
            "Deberá colocar su estado civil como lo indica su cedula de identidad",
          format: "",
          required: true,
        },
        {
          id: "rif",
          label: "RIF",
          type: "",
          title:
            "Deberá colocar el número de RIF persona natural suministrado por el SENIAT en el formato V########.",
          format: "",
        },
        {
          id: "picture",
          label: "Foto",
          type: "file",
        },
      ],
    },
    {
      fieldsetName: "Nacionalidad",
      inputList: [
        {
          id: "nacionalidad",
          label: "Venezolano por...",
          type: "select",
          options: ["Nacimiento", "Naturalización"],
          title: "",
          format: "",
          required: true,
        },
        {
          id: "nroGaceta",
          label: "Nro. Gaceta (GORBV N°#####)",
          type: "",
          title:
            "En caso de ser naturalizado indique el número de Gaceta en el formato (GORBV N°#####)",
          format: "",
        },
        {
          id: "fechaGaceta",
          label: "Fecha de publicación de gaceta:",
          type: "date",
          title:
            "Deberá colocar la fecha de la Gaceta Oficial en el formato (dd/mm/aaaa).",
          format: "",
        },
      ],
    },
    {
      fieldsetName: "Lugar de nacimiento",
      inputList: [
        {
          type: "location",
          content: [
            {
              id: "paisNacimiento",
              label: "País",
              type: "",
              title: "Indique país de nacimiento",
              required: true,
            },
            {
              id: "estadoNacimiento",
              label: "Estado",
              type: "",
              title: "Indique estado del país donde nació",
              required: true,
            },
            {
              id: "municipioNacimiento",
              label: "Municipio",
              type: "",
              title: " Indique municipio del estado.",
              required: true,
            },
            {
              id: "parroquiaNacimiento",
              label: "Parroquia",
              type: "",
              title:
                "Indique parroquia del municipio en que nació / o lo que aplica en el país de nacimiento.",
              required: true,
            },
          ],
        },
      ],
    },
    {
      fieldsetName: "Información de residencia",
      inputList: [
        {
          type: "location",
          content: [
            {
              id: "paisDomicilio",
              label: "País",
              type: "",
              title: "Indique en que país reside.",
              format: "",
              required: true,
            },
            {
              id: "estadoDomicilio",
              label: "Estado",
              type: "",
              title: "Indique en que estado del país reside.",
              format: "",
              required: true,
            },
            {
              id: "municipioDomicilio",
              label: "Municipio",
              type: "",
              title: "Indique en que municipio del estado reside.",
              format: "",
              required: true,
            },
            {
              id: "parroquiaDomicilio",
              label: "Parroquia",
              type: "",
              title: "Indique en que parroquia del municipio reside.",
              format: "",
              required: true,
            },
          ],
        },
        {
          id: "viaDomicilio",
          label: "Vía",
          type: "",
          title:
            "Indique en que (calle/avenida/callejón/autopista), está ubicada su residencia.",
          format: "",
          required: true,
        },
        {
          id: "areaDomicilio",
          label: "Área",
          type: "",
          title:
            "Indique en que (urbanización/sector/zona/conjunto residencial/ barrio /caserío), está ubicada su residencia.",
          format: "",
          required: true,
        },
        {
          id: "tipoInmueble",
          label: "Tipo Inmueble",
          type: "select",
          options: ["Casa", "Apartamento", "Quinta", "Edificio", "Local"],
          title: "Indique el tipo de inmueble que es su residencia ",
          format: "",
          required: true,
        },
        {
          id: "nroInmueble",
          label: "Nro. Inmueble",
          type: "",
          title: "Indique el número de su residencia.",
          format: "",
          required: true,
        },
      ],
    },
    {
      fieldsetName: "Contacto",
      inputList: [
        {
          id: "numeroMovil",
          label: "Tlf. Celular",
          type: "",
          title: "",
          format: "xxx-xxxx",
          required: true,
        },
        {
          id: "telefonoHabitacion",
          label: "Teléfono Habitación",
          type: "",
          title: "",
          format: "",
        },
        {
          id: "telefonoOficina",
          label: "Teléfono Oficina",
          type: "",
          title: "",
          format: "",
        },
        {
          id: "correoElectronico",
          label: "Correo Electrónico",
          type: "email",
          title: "",
          format: "",
          required: true,
        },
        {
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
          title: "Indique tipo de sangre y el factor RH (Ejemplo: ARH+)",
          format: "",
          required: true,
        },
        {
          id: "hijos",
          label: "Hijos",
          type: "radio",
          options: ["si", "no"],
          title: "Indique si tiene al menos un hijo.",
          format: "",
          required: true,
        },
        {
          id: "elegible",
          label: "Elegible",
          type: "radio",
          options: ["si", "no"],
          title: "No seleccione ninguna opción si no es alistador",
          format: "",
        },
        {
          id: "causa",
          label: "Causa",
          type: "",
          title:
            "Si marca NO en la pregunta anterior indique la causa. Si no es alistador, evite escribir aqui.",
          format: "",
        },
      ],
    },
  ],
};

const socioEconomicConfigData = {
  id: "socio-econom-section",
  title: "2.-Información Socio-económica",
  config: [
    {
      fieldsetName: "Estudios",
      inputList: [
        {
          id: "educationLevel",
          label: "Grado de Instrucción",
          type: "select",
          options: [
            "No posee",
            "Primaria",
            "Secundaria",
            "Técnico medio",
            "TSU",
            "Universitario",
          ],
          title: "",
          format: "",
          required: true,
        },
        {
          id: "isStudying",
          label: "¿Estudia?",
          type: "radio",
          options: ["si", "no"],
          title: "Indique si se encuentra cursando estudio en este momento",
          format: "",
          required: true,
        },
        {
          id: "studyType",
          label: "Tipo de Estudio",
          title: "Si la respuesta es afirmativa, indique qué estudia.",
          format: "",
        },
        {
          id: "specialization",
          label: "Especialidad",
          title: "Indique, según su profesión, qué especialidad posee.",
          format: "",
        },
        {
          id: "institution",
          label: "Institución",
          type: "select",
          options: ["Pública", "Privada"],
          title:
            "Seleccione el tipo de institución en la que estudia o estudió.",
          format: "",
        },
        {
          id: "instituteName",
          label: "Nombre del Instituto",
          title:
            "Coloque el nombre del instituto de educación donde estudia o estudió.",
          format: "",
        },
      ],
    },
    {
      fieldsetName: "Laboral",
      inputList: [
        {
          id: "isWorking",
          label: "¿Trabaja?",
          type: "radio",
          options: ["si", "no"],
          title: "Indique si tiene o no trabajo",
          format: "",
          required: true,
        },
        {
          id: "occupation",
          label: "Ocupación u Oficio",
          type: "",
          title:
            "Indique su ocupación u oficio dentro de la empresa, institución ó negocio donde trabaja.",
          format: "",
          required: true,
        },
        {
          id: "company",
          label: "Empresa",
          title:
            " Indique el nombre del lugar, institución o empresa donde trabaja.",
          format: "",
        },

        {
          type: "location",
          content: [
            {
              id: "companyCountry",
              label: "País",
              title: "Indique en qué país está ubicada la empresa.",
              format: "",
            },
            {
              id: "companyState",
              label: "Estado",
              title: "Indique en qué estado del país está ubicada la empresa.",
              format: "",
            },
            {
              id: "companyMunicipality",
              label: "Municipio",
              title:
                "Indique en qué municipio del estado está ubicada la empresa.",
              format: "",
            },
            {
              id: "companyParish",
              label: "Parroquia",
              title:
                "Indique en qué parroquia del municipio está ubicada la empresa.",
              format: "",
            },
          ],
        },

        {
          id: "companyPhone",
          label: "Teléfono de la Empresa",
          title: "Indique el número de contacto de la empresa o institución",
          format: "",
        },
      ],
    },
  ],
};

const militaryConfigData = {
  id: "militar-section",
  title: "3.-Información Militar",
  config: [
    {
      fieldsetName: "Instrucción Premilitar",
      inputList: [
        {
          id: "preMilitaryTraining",
          label: "Instrucción Premilitar",
          type: "radio",
          options: ["si", "no"],
          title: "Indique si recibió o no instrucción premilitar",
          format: "",
          required: true,
        },
        {
          id: "militaryInstituteName",
          label: "Nombre del Instituto",
          title:
            "Indique el nombre del instituto donde recibió la instrucción militar.",
          format: "",
        },
      ],
    },
    {
      fieldsetName: "Servicio Militar",
      inputList: [
        {
          id: "militaryServiceStatus",
          label: "Situación Actual",
          type: "select",
          options: ["Activo", "Reserva militar"],
          title: "Indique su situación en el servicio militar.",
          format: "",
        },
        {
          id: "militaryServiceComponent",
          label: "Componente",
          type: "select",
          options: [
            "Ejército Bolivariano",
            "Armada Bolivariana",
            "Aviación Militar Bolivariana",
            "Guardia Nacional Bolivariana",
            "Milicia Bolivariana",
            "Tropa alistada",
            "Reserva militar",
          ],
          title:
            "Indique el componente de la FANB donde presta o presto el servicio militar.",
          format: "",
        },
        {
          id: "militaryServiceUnit",
          label: "Unidad",
          title:
            "Indique la unidad de la FANB donde presto o presta el servicio militar.",
          format: "",
        },
        {
          id: "performanceArea",
          label: "Área de Desempeño",
          title:
            "Indique su especialidad militar obtenida durante su servicio militar.",
          format: "",
        },
        {
          id: "militarySpecialization",
          label: "Especialidad",
          title:
            "Indique su especialidad militar obtenida durante su servicio militar.",
          format: "",
        },
        {
          id: "militaryEntryDate",
          label: "Fecha de Ingreso",
          type: "date",
          title:
            "Indique la fecha en la cual ingresó al servicio militar en el formato.",
          format: "dd-mm-aaaa",
        },
        {
          id: "militaryExitDate",
          label: "Fecha de Egreso",
          type: "date",
          title:
            "Indique la fecha en la cual egresó al servicio militar en el formato.",
          format: "dd-mm-aaaa",
        },
        {
          id: "militaryRank",
          label: "Jerarquía",
          title: "Indique que jerarquía adquirió durante el servicio militar.",
          format: "",
        },
      ],
    },
    {
      fieldsetName: "Profesional Militar",
      inputList: [
        {
          id: "militaryProfessionalStatus",
          label: "Situación Actual",
          type: "select",
          options: ["Activo", "Reserva activa"],
          title: "Indique su situación",
          format: "",
        },
        {
          id: "militaryProfessionalComponent",
          label: "Componente",
          type: "select",
          options: [
            "Ejército Bolivariano",
            "Armada Bolivariana",
            "Aviación Militar Bolivariana",
            "Guardia Nacional Bolivariana",
            "Milicia Bolivariana",
          ],
          title: "Indique el componente de la FANB al que pertenece.",
          format: "",
        },
        {
          id: "militaryProfessionalCategory",
          label: "Categoría",
          type: "select",
          options: [
            "Efectivo",
            "Asimilado",
            "Oficial de Reserva",
            "Oficial de Milicia",
            "Honorario",
          ],
          title: "Indique categoría según corresponda.",
          format: "",
        },
        {
          id: "professionalSpecialization",
          label: "Especialidad",
          title: "Indique la especialidad obtenida en su carrera militar.",
          format: "",
        },
        {
          id: "militaryProfessionalGrade",
          label: "Grado",
          title: "Indique el grado militar.",
          format: "",
        },
        {
          id: "professionalEntryDate",
          label: "Fecha de Ingreso",
          type: "date",
          title: "Indique la fecha de ingresó a la FANB.",
          format: "dd-mm-aaaa",
        },
        {
          id: "professionalExitDate",
          label: "Fecha de Egreso",
          type: "date",
          title: "Indique la fecha de egresó a la FANB.",
          format: "dd-mm-aaaa",
        },
      ],
    },
    {
      fieldsetName: "Milicia Bolivariana",
      inputList: [
        {
          id: "militiaRank",
          label: "Grado/Jerarquía",
          title: " Indique el grado militar o jerarquía.",
          format: "",
        },
        {
          id: "integralDefenseArea",
          label: "Área de Defensa Integral",
          title: "Indique el ADI a la que pertenece.",
          format: "",
        },
        {
          id: "combatantCorps",
          label: "Cuerpo Combatiente",
          title: "Indicar el cuerpo combatiente donde presta servicio.",
          format: "",
        },
        {
          id: "militiaBattalion",
          label: "Batallón de Milicia",
          title:
            "Indicar la unidad de milicia territorial donde presta servicio.",
          format: "",
        },
        {
          id: "militiaEntryDate",
          label: "Fecha de Ingreso",
          type: "date",
          title: "Indique la fecha en la que ingresó a la Milicia Bolivariana",
          format: "dd-mm-aaaa",
        },
      ],
    },
  ],
  submit: {
    value: "Generar planilla",
  },
};

const militaryRegistrationFormConfig = [
  personalConfigData,
  socioEconomicConfigData,
  militaryConfigData,
];

export default militaryRegistrationFormConfig;
