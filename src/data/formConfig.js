export const inputConfigPersonal = {
  ci: {
    id: "ci",
    label: "C.I.",
    type: "number",
    title: "",
    format: "",
    required: true,
    title:
      "Deberá colocar el N° de la cedula de identidad Venezolana. Ejemplo: 20453266.",
  },
  nombre: {
    id: "name",
    label: "Nombre",
    type: "",
    title: "",
    format: "",
    required: true,
    title:
      "Deberá colocar los apellidos completos que aparecen en su cedula de identidad.",
  },
  apellido: {
    id: "lastname",
    label: "Apellido",
    type: "",
    title:
      "Deberá colocar los nombres completos que aparecen en su cedula de identidad.",
    format: "",
    required: true,
  },
  sexo: {
    id: "sex",
    label: "Sexo",
    type: "radio",
    options: ["Masculino", "Femenino"],
    title: "",
    format: "",
    required: true,
  },
  fechaDeNacimiento: {
    id: "birthdate",
    label: "Fecha de Nacimiento",
    type: "date",
    title: "Deberá colocar la fecha de nacimiento en el formato (dd/mm/aaaa).",
    format: "",
    required: true,
  },
  edoCivil: {
    id: "edoCivil",
    label: "Estado Civil",
    type: "select",
    options: ["Soltero/a", "Divorciado/a", "Casado/a", "Viudo/a"],
    title:
      "Deberá colocar su estado civil como lo indica su cedula de identidad",
    format: "",
    required: true,
  },
  rif: {
    id: "rif",
    label: "RIF",
    type: "",
    title:
      "Deberá colocar el número de RIF persona natural suministrado por el SENIAT en el formato V########.",
    format: "",
  },
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
    title: "",
    format: "",
    required: true,
  },
  nroGaceta: {
    id: "nroGaceta",
    label: "Nro. Gaceta (GORBV N°#####)",
    type: "",
    title:
      "En caso de ser naturalizado indique el número de Gaceta en el formato (GORBV N°#####)",
    format: "",
  },
  fechaGaceta: {
    id: "fechaGaceta",
    label: "Fecha de publicación de gaceta:",
    type: "date",
    title:
      "Deberá colocar la fecha de la Gaceta Oficial en el formato (dd/mm/aaaa).",
    format: "",
  },
  lugarNacimiento: {
    pais: {
      id: "paisNacimiento",
      label: "País",
      type: "",
      title: "Indique país de nacimiento",
      format: "",
      required: true,
    },
    estado: {
      id: "estadoNacimiento",
      label: "Estado",
      type: "",
      title: "Indique estado del país donde nació",
      format: "",
      required: true,
    },
    municipio: {
      id: "municipioNacimiento",
      label: "Municipio",
      type: "",
      title: " Indique municipio del estado.",
      format: "",
      required: true,
    },
    parroquia: {
      id: "parroquiaNacimiento",
      label: "Parroquia",
      type: "",
      title:
        "Indique parroquia del municipio en que nació / o lo que aplica en el país de nacimiento.",
      format: "",
      required: true,
    },
  },
  direccionDomiciliaria: {
    pais: {
      id: "paisDomicilio",
      label: "País",
      type: "",
      title: "Indique en que país reside.",
      format: "",
      required: true,
    },
    estado: {
      id: "estadoDomicilio",
      label: "Estado",
      type: "",
      title: "Indique en que estado del país reside.",
      format: "",
      required: true,
    },
    municipio: {
      id: "municipioDomicilio",
      label: "Municipio",
      type: "",
      title: "Indique en que municipio del estado reside.",
      format: "",
      required: true,
    },
    parroquia: {
      id: "parroquiaDomicilio",
      label: "Parroquia",
      type: "",
      title: "Indique en que parroquia del municipio reside.",
      format: "",
      required: true,
    },
    via: {
      id: "viaDomicilio",
      label: "Vía",
      type: "",
      title:
        "Indique en que (calle/avenida/callejón/autopista), está ubicada su residencia.",
      format: "",
      required: true,
    },
    area: {
      id: "areaDomicilio",
      label: "Área",
      type: "",
      title:
        "Indique en que (urbanización/sector/zona/conjunto residencial/ barrio /caserío), está ubicada su residencia.",
      format: "",
      required: true,
    },
    tipoInmueble: {
      id: "tipoInmueble",
      label: "Tipo Inmueble",
      type: "select",
      options: ["Casa", "Apartamento", "Quinta", "Edificio", "Local"],
      title: "Indique el tipo de inmueble que es su residencia ",
      format: "",
      required: true,
    },
    nroInmueble: {
      id: "nroInmueble",
      label: "Nro. Inmueble",
      type: "",
      title: "Indique el número de su residencia.",
      format: "",
      required: true,
    },
  },
  telefonoMovil: {
    id: "numeroMovil",
    label: "Tlf. Celular",
    type: "",
    title: "",
    format: "xxx-xxxx",
    required: true,
  },
  telefonoHabitacion: {
    id: "telefonoHabitacion",
    label: "Teléfono Habitación",
    type: "",
    title: "",
    format: "",
  },
  telefonoOficina: {
    id: "telefonoOficina",
    label: "Teléfono Oficina",
    type: "",
    title: "",
    format: "",
  },
  correoElectronico: {
    id: "correoElectronico",
    label: "Correo Electrónico",
    type: "email",
    title: "",
    format: "",
    required: true,
  },
  grupoSanguineo: {
    id: "grupoSanguineo",
    label: "Grupo Sanguíneo",
    type: "select",
    options: ["ARH+", "ARH-", "ABRH+", "ABRH-", "BRH+", "BRH-", "ORH+", "ORH-"],
    title: "Indique tipo de sangre y el factor RH (Ejemplo: ARH+)",
    format: "",
    required: true,
  },
  hijos: {
    id: "hijos",
    label: "Hijos",
    type: "radio",
    options: ["si", "no"],
    title: "Indique si tiene al menos un hijo.",
    format: "",
    required: true,
  },
  elegible: {
    id: "elegible",
    label: "Elegible",
    type: "radio",
    options: ["si", "no"],
    title: "No seleccione ninguna opción si no es alistador",
    format: "",
  },
  causa: {
    id: "causa",
    label: "Causa",
    type: "",
    title:
      "Si marca NO en la pregunta anterior indique la causa. Si no es alistador, evite escribir aqui.",
    format: "",
  },
};

export const inputConfigSocio = {
  gradoInstruccion: {
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
  estudia: {
    id: "isStudying",
    label: "¿Estudia?",
    type: "radio",
    options: ["si", "no"],
    title: "Indique si se encuentra cursando estudio en este momento",
    format: "",
    required: true,
  },
  tipoEstudio: {
    id: "studyType",
    label: "Tipo de Estudio",
    title: "Si la respuesta es afirmativa, indique qué estudia.",
    format: "",
  },
  especialidad: {
    id: "specialization",
    label: "Especialidad",
    title: "Indique, según su profesión, qué especialidad posee.",
    format: "",
  },
  institucion: {
    id: "institution",
    label: "Institución",
    type: "select",
    options: ["Pública", "Privada"],
    title: "Seleccione el tipo de institución en la que estudia o estudió.",
    format: "",
  },
  nombreInstituto: {
    id: "instituteName",
    label: "Nombre del Instituto",
    title:
      "Coloque el nombre del instituto de educación donde estudia o estudió.",
    format: "",
  },
  trabaja: {
    id: "isWorking",
    label: "¿Trabaja?",
    type: "radio",
    options: ["si", "no"],
    title: "Indique si tiene o no trabajo",
    format: "",
    required: true,
  },
  ocupacionOficio: {
    id: "occupation",
    label: "Ocupación u Oficio",
    type: "",
    title:
      "Indique su ocupación u oficio dentro de la empresa, institución ó negocio donde trabaja.",
    format: "",
    required: true,
  },
  empresa: {
    id: "company",
    label: "Empresa",
    title: " Indique el nombre del lugar, institución o empresa donde trabaja.",
    format: "",
  },
  direccionEmpresa: {
    pais: {
      id: "companyCountry",
      label: "País",
      // type: "select",
      title: "Indique en qué país está ubicada la empresa.",
      format: "",
    },
    estado: {
      id: "companyState",
      label: "Estado",
      // type: "select",
      title: "Indique en qué estado del país está ubicada la empresa.",
      format: "",
    },
    municipio: {
      id: "companyMunicipality",
      label: "Municipio",
      // type: "select",
      title: "Indique en qué municipio del estado está ubicada la empresa.",
      format: "",
    },
    parroquia: {
      id: "companyParish",
      label: "Parroquia",
      // type: "select",
      title: "Indique en qué parroquia del municipio está ubicada la empresa.",
      format: "",
    },
  },
  telefonoEmpresa: {
    id: "companyPhone",
    label: "Teléfono de la Empresa",
    title: "Indique el número de contacto de la empresa o institución",
    format: "",
  },
};

export const inputConfigMilitar = {
  instruccionPremilitar: {
    id: "preMilitaryTraining",
    label: "Instrucción Premilitar",
    type: "radio",
    options: ["si", "no"],
    title: "Indique si recibió o no instrucción premilitar",
    format: "",
    required: true,
  },
  nombreInstituto: {
    id: "militaryInstituteName",
    label: "Nombre del Instituto",
    title:
      "Indique el nombre del instituto donde recibió la instrucción militar.",
    format: "",
  },
  servicioMilitar: {
    situacionActual: {
      id: "militaryServiceStatus",
      label: "Situación Actual",
      type: "select",
      options: ["Activo", "Reserva militar"],
      title: "Indique su situación en el servicio militar.",
      format: "",
    },
    componente: {
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
    unidad: {
      id: "militaryServiceUnit",
      label: "Unidad",
      title:
        "Indique la unidad de la FANB donde presto o presta el servicio militar.",
      format: "",
    },
    areaDesempeno: {
      id: "performanceArea",
      label: "Área de Desempeño",
      title:
        "Indique su especialidad militar obtenida durante su servicio militar.",
      format: "",
    },
    especialidadMilitar: {
      id: "militarySpecialization",
      label: "Especialidad",
      title:
        "Indique su especialidad militar obtenida durante su servicio militar.",
      format: "",
    },
    fechaIngreso: {
      id: "militaryEntryDate",
      label: "Fecha de Ingreso",
      type: "date",
      title: "Indique la fecha en la cual ingresó al servicio militar en el formato.",
      format: "dd-mm-aaaa",
    },
    fechaEgreso: {
      id: "militaryExitDate",
      label: "Fecha de Egreso",
      type: "date",
      title: "Indique la fecha en la cual egresó al servicio militar en el formato.",
      format: "dd-mm-aaaa",
    },
    jerarquia: {
      id: "militaryRank",
      label: "Jerarquía",
      title: "Indique que jerarquía adquirió durante el servicio militar.",
      format: "",
    },
  },

  profesionalMilitar: {
    situacionActual: {
      id: "militaryProfessionalStatus",
      label: "Situación Actual",
      type: "select",
      options: ["Activo", "Reserva activa"],
      title: "Indique su situación",
      format: "",
    },
    componente: {
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
    categoria: {
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
    especialidadProfesional: {
      id: "professionalSpecialization",
      label: "Especialidad",
      title: "Indique la especialidad obtenida en su carrera militar.",
      format: "",
    },
    grado: {
      id: "militaryProfessionalGrade",
      label: "Grado",
      title: "Indique el grado militar.",
      format: "",
    },
    fechaIngresoProfesional: {
      id: "professionalEntryDate",
      label: "Fecha de Ingreso",
      type: "date",
      title: "Indique la fecha de ingresó a la FANB.",
      format: "dd-mm-aaaa",
    },
    fechaEgresoProfesional: {
      id: "professionalExitDate",
      label: "Fecha de Egreso",
      type: "date",
      title: "Indique la fecha de egresó a la FANB.",
      format: "dd-mm-aaaa",
    },
  },
  miliciaBolivariana: {
    gradoJerarquia: {
      id: "militiaRank",
      label: "Grado/Jerarquía",
      title: " Indique el grado militar o jerarquía.",
      format: "",
    },
    areaDefensaIntegral: {
      id: "integralDefenseArea",
      label: "Área de Defensa Integral",
      title: "Indique el ADI a la que pertenece.",
      format: "",
    },
    cuerpoCombatiente: {
      id: "combatantCorps",
      label: "Cuerpo Combatiente",
      title: "Indicar el cuerpo combatiente donde presta servicio.",
      format: "",
    },
    batallonMilicia: {
      id: "militiaBattalion",
      label: "Batallón de Milicia",
      title: "Indicar la unidad de milicia territorial donde presta servicio.",
      format: "",
    },
    fechaIngresoMilicia: {
      id: "militiaEntryDate",
      label: "Fecha de Ingreso",
      type: "date",
      title: "Indique la fecha en la que ingresó a la Milicia Bolivariana",
      format: "dd-mm-aaaa",
    },
  },
};
