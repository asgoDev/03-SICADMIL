import escudo from "../assets/escudo.png";
import escudo2 from "../assets/escudo2.png";
import scisors from "../assets/scisors.png";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import '../styles/planilla.css'

function Planilla() {
  let { isAllInputsOk, formData } = useContext(GlobalContext);
  useEffect(() => {
    console.log(formData);
  }, []);
  return (
    <div className="page" onClick={(e)=>{
      window.print()
    }}>
        <header className="page-header">
          <img className="page-header__img bigger-img" src={escudo} alt="" />
          <p className="page-header__text fs-8 ">
            REPÚBLICA BOLIVARIANA DE VENEZUELA
            <br /> MINISTERIO DEL PODER POPULAR PARA LA DEFENSA
            <br /> VICEMINISTERIO DE SERVICIOS PARA LA DEFENSA
            <br /> SECRETARIA PERMANENTE DE REGISTRO Y ALISTAMIENTO PARA LA
            DEFENSA INTEGRAL DE LA NACIÓN
          </p>
          <img className="page-header__img bigger-img" src={escudo2} alt="" />
        </header>
        <h2 className="page-title fs-9">
          REGISTRO PARA LA DEFENSA INTEGRAL DE PERSONA NATURAL
        </h2>
        <p className="page-date fs-8 bolder">
          FECHA EMISIÓN: {formData.birthdate}
        </p>
        <div className="table">
          <div className="table-title span-8">1. INFORMACIÓN PERSONAL</div>
          <div className="table-title span-4 border-left">NRO. REGISTRO</div>
          <span className="table-cell span-2">C.I: 26.266.384</span>
          <span className="table-cell span-5">APELLIDOS: {formData.lastName}</span>
          <span className="table-cell span-5">NOMBRES: {formData.name}</span>
          <span className="table-cell span-2">SEXO: {formData.sex}</span>
          <span className="table-cell span-4">
            FECHA DE NACIMIENTO: {formData.birthdate}
          </span>
          <span className="table-cell span-3">RIF: J-2626638-8</span>
          <span className="table-cell span-3">EDO. CIVIL: soltero</span>
          <span className="table-cell span-5">
            VENEZOLANO POR: NACIONALIDAD
          </span>
          <span className="table-cell span-4">NRO. GACETA: 123123123</span>
          <span className="table-cell span-2">FECHA: {formData.birthdate}</span>
          <span className="table-cell table-subtitle">
            Lugar de nacimiento:{" "}
          </span>
          <span className="table-cell span-3">pais: Venezuela</span>
          <span className="table-cell span-3">estado: Venezuela</span>
          <span className="table-cell span-3">municipio: Venezuela</span>
          <span className="table-cell span-3">parroquia: Venezuela</span>
          <span className="table-cell table-subtitle">
            Dirección domiciliaria:{" "}
          </span>
          <span className="table-cell span-3">pais: Venezuela</span>
          <span className="table-cell span-3">estado: Venezuela</span>
          <span className="table-cell span-3">municipio: Venezuela</span>
          <span className="table-cell span-3">parroquia: San Antonio</span>
          <span className="table-cell span-6">
            Vía: C. Sucre, con sur y silva
          </span>
          <span className="table-cell span-6">Área: Venezuela</span>
          <span className="table-cell span-6">Tipo Inmueble: b2-14</span>
          <span className="table-cell span-6">Nro. Inmueble: b2-14</span>
          <span className="table-cell span-4">
            Teléfono móvil: 0268-277-26-23
          </span>
          <span className="table-cell span-4">
            Teléfono habitación: 0268-277-26-23
          </span>
          <span className="table-cell span-4">
            Teléfono oficina: 0268-277-26-23
          </span>
          <span className="table-cell span-6">correo electrónico: b2-14</span>
          <span className="table-cell span-6">grupo sanguíneo: b2-14</span>
          <span className="table-cell span-2">hijos: <span className="fake-check"></span></span>
          <span className="table-cell span-2">elegible: si x no</span>
          <span className="table-cell span-8">
            causa: C. Sucre, con sur y silva
          </span>
          <div className="table-title span-12">
            2. INFORMACIÓN socio-económica
          </div>
          <span className="table-cell span-5">
            grado de instrucción: bachiller
          </span>
          <span className="table-cell span-5">estudia: si x no</span>
          <span className="table-cell span-5">tipo de estudio: bachiller</span>
          <span className="table-cell span-7">
            especialidad: Ingeniero de Telecomunicaciones
          </span>
          <span className="table-cell span-3">Institución: privada</span>
          <span className="table-cell span-9">
            nombre del instituto: universidad nacional experimental de la fuerza
            armada
          </span>
          <span className="table-cell span-3">trabaja: si x no</span>
          <span className="table-cell span-4">ocupación u oficio: si x no</span>
          <span className="table-cell span-5">empresa: vit</span>
          <span className="table-cell table-subtitle">dirección empresa: </span>
          <span className="table-cell span-6">pais: Venezuela</span>
          <span className="table-cell span-6">estado: Venezuela</span>
          <span className="table-cell span-6">municipio: Venezuela</span>
          <span className="table-cell span-6">parroquia: Venezuela</span>
          <span className="table-cell span-6">teléfono: 0268-277-26-25</span>
          <div className="table-title span-12">3. información militar</div>
          <span className="table-cell table-subtitle">
            instrucción Premilitar: si x no
          </span>
          <span className="table-cell span-12">
            Nombre del instituto: colegio católico santa ana
          </span>
          <span className="table-cell table-subtitle">
            servicio militar: (solo para ser llenado por tropa alistada y
            reserva militar)
          </span>
          <span className="table-cell span-4">situación actual: Venezuela</span>
          <span className="table-cell span-4">componente: Venezuela</span>
          <span className="table-cell span-4">unidad: Venezuela</span>
          <span className="table-cell span-6">
            área de desempeño: Venezuela
          </span>
          <span className="table-cell span-6">especialidad: Venezuela</span>
          <span className="table-cell span-4">fecha de ingreso: Venezuela</span>
          <span className="table-cell span-4">fecha de egreso: Venezuela</span>
          <span className="table-cell table-subtitle">
            profesional militar: (solo para ser llenado por profesionales
            militares y reserva activa)
          </span>
          <span className="table-cell span-4">situación actual: Venezuela</span>
          <span className="table-cell span-4">componente: Venezuela</span>
          <span className="table-cell span-4">categoría: Venezuela</span>
          <span className="table-cell span-6">especialidad: Venezuela</span>
          <span className="table-cell span-6">grado: Venezuela</span>
          <span className="table-cell span-4">fecha de ingreso: Venezuela</span>
          <span className="table-cell span-4">fecha de egreso: Venezuela</span>
          <span className="table-cell table-subtitle">
            milicia bolivariana: (solo para ser llenado por ciudadanos de
            categoría de milicia)
          </span>
          <span className="table-cell span-12">grado/jerarquía: Venezuela</span>
          <span className="table-cell span-12">
            área de defensa integral: Venezuela
          </span>
          <span className="table-cell span-12">
            cuerpo de combate: Venezuela
          </span>
          <span className="table-cell span-12">
            batallón de milicia: Venezuela
          </span>
          <span className="table-cell span-12">
            fecha de ingreso: Venezuela
          </span>
        </div>
        <div className="line-container">
          <img src={scisors} alt="" />
          <hr className="cutting-line" />
        </div>
        <div className="card">
          <div className="card-a">
            <div className="page-header">
              <img className="page-header__img" src={escudo} alt="" />
              <p className="page-header__text fs-6 ">
                REPÚBLICA BOLIVARIANA DE VENEZUELA
                <br /> MINISTERIO DEL PODER POPULAR PARA LA DEFENSA
                <br /> VICEMINISTERIO DE SERVICIOS PARA LA DEFENSA
                <br /> SECRETARIA PERMANENTE DE REGISTRO Y ALISTAMIENTO <br />
                PARA LA DEFENSA INTEGRAL DE LA NACIÓN
              </p>
              <img className="page-header__img" src={escudo2} alt="" />
            </div>
            <h6 className="card__title fs-8">
              CARNET DE REGISTRO PARA LA DEFENSA INTEGRAL
              {/* REGISTRO PARA LA DEFENSA INTEGRAL DE PERSONA NATURAL */}
            </h6>
            <div className="card__content-container">
              <div className="card__principal-data">
                <p className="card__subtitle">Datos personales:</p>
                <p className="card__item">APELLIDOS: gonzalez chirino</p>
                <p className="card__item">NOMBRES: aquiles santiago</p>
                <p className="card__item">cédula: 26.266.384</p>
                <p className="card__subtitle margin-top">
                  Dirección domiciliaria:
                </p>
                <p className="card__item">pais: gonzalez chirino</p>
                <p className="card__item">estado: aquiles santiago</p>
                <p className="card__item">municipio: 26.266.384</p>
                <p className="card__item">parroquia: 26.266.384</p>
              </div>
              <div className="card__picture">
                <img src={formData.picture} alt="" />
              </div>
            </div>
          </div>
          <div className="card-b border-left">
            <p className="card__subtitle">Información socioeconómica:</p>
            <p className="card__item">grado de instrucción: </p>
            <p className="card__item">ocupación:</p>
            <p className="card__item">empresa: </p>
            <div className="card-b__militar-info">
              <p className="card__subtitle margin-top">
                Información Militar:
              </p>
              <p className="card__item">
                militar profesional: <span className="fake-check"></span>
              </p>
              <p className="card__item">
                miliciano: <span className="fake-check"></span>
              </p>
              <p className="card__item">
                reservista: <span className="fake-check"></span>
              </p>
              <p className="card__item">
                ninguna: <span className="fake-check"></span>
              </p>
            </div>
            <p className="card__subtitle card-b__warning margin-top">este carnet solo será válido con sello <br /> húmedo y número de registro.</p>
            <p className="card-b__card-description">fecha emisión: 01MAR2024</p>
            <p className="card-b__card-description">nro. registro:</p>
              
          </div>
        </div>
        <div className="line-container">
          <img src={scisors} alt="" />
          <hr className="cutting-line" />
        </div>
      </div>
  )
}

export default Planilla