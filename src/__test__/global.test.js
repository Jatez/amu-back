const app = require("../index")
const request = require("supertest")

describe("GET /laboratorios", () => {
    it("Trae todos los laboratorios", (done) => {
        request(app)
            .get("/laboratorios")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);

    })
})

describe("GET /equipos", () => {
    it("Trae todos los laboratorios", (done) => {
        request(app)
            .get("/equipos")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);

    })
})

describe("GET /eventos", () => {
    it("Trae todos los laboratorios", (done) => {
        request(app)
            .get("/eventos")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);

    })
})

describe("GET /certificados", () => {
    it("Trae todos los laboratorios", (done) => {
        request(app)
            .get("/certificados")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);

    })
})

let data = {
    nombre: "luis",
    direccion: "calle 34",
    telefono: "453465464",
}

describe("POST /laboratorios", () => {
    it("Insertar laboratorios", (done) => {
        request(app)
            .post("/laboratorios")
            .send(data)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);
    })
})

let dataequipo = {
    serie: "2131234sa",
    nombre_especifico: "balanza",
    nombre_generico: "balanza amu",
    marca:"asus",
    modelo:"34345asad",
    fecha_ultima_actividad:"1627811580",
    estado:"bueno"
}

describe("POST /equipos", () => {
    it("Insertar equipos", (done) => {
        request(app)
            .post("/equipos")
            .send(dataequipo)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);

    })
})

let dataevento = {
    agendada: false,
    estado: "malo",
    fecha_agendada: "1627811580",
    tipo_evento:"asus",
    codigo_equipo:"634dae21c509690fa8038655",
    codigo_laboratorio:"634dbf6adb52e91b308ec790"
}

describe("POST /eventos", () => {
    it("Insertar eventos", (done) => {
        request(app)
            .post("/eventos")
            .send(dataevento)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);

    })
})

let datacertificado = {
    numero_certificado: 1,
    titulo: "hola",
    observacion: "dgdfgdff",
    codigo_evento:"634dcc0a17dd85cccad1060f"
}

describe("POST /certificados", () => {
    it("Insertar certificados", (done) => {
        request(app)
            .post("/certificados")
            .send(datacertificado)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);

    })
})

let data_actualizacion_evento = {
    agendada: true,
    estado: "malo",
    fecha_agendada: "1627811580",
    tipo_evento:"asus",
    codigo_equipo:"634dae21c509690fa8038655",
    codigo_laboratorio:"634dbf6adb52e91b308ec790"
}

describe("PUT /eventos", () => {
    it("Actualiza eventos", (done) => {
        request(app)
            .put("/eventos/634dcc0a17dd85cccad1060f")
            .send(data_actualizacion_evento)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);

    })
})

let data_actualizacion_laboratorios = {
    nombre: "pedro",
    direccion: "calle 34",
    telefono: "453465464",
}

describe("PUT /laboratorios", () => {
    it("Actualizar laboratorios", (done) => {
        request(app)
            .put("/laboratorios/634f322a588a14dc81a4014a")
            .send(data_actualizacion_laboratorios)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);
    })
})