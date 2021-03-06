const express = require('express');
const morgan = require('morgan');
const router = express.Router();

router.use(express.json());
const disponibilidadController = require('../controllers/disponibilidadController');


router.get("/",(req, res)=>{
    res.end(`express running on the server ${app.get("port")}`);
})
router.get("/api/disponibilidad/:idtutor", disponibilidadController.listarPorTutor);

router.get("/api/disponibilidad/", disponibilidadController.listar);

router.get("/api/disponibilidad/listarDia/:fecha/:idtutor", disponibilidadController.listarPorTutorFecha);

router.get("/api/disponibilidad/listarPrograma/:idprograma/:fecha/:idtutor/", disponibilidadController.listarPorProgramaTutorFecha);

router.get("/api/disponibilidad/listarDia/:fecha", disponibilidadController.listarPorFecha);

router.get("/api/disponibilidad/listarPrograma/:idprograma/:fecha", disponibilidadController.listarPorProgramaFecha);

router.post("/api/disponibilidad", disponibilidadController.register);

router.get("/api/disponibilidad/:idtutor/:id", disponibilidadController.get);

router.post("/api/disponibilidad/modificar", disponibilidadController.modificar);

router.post("/api/disponibilidad/eliminar/:idDisp", disponibilidadController.eliminar);

router.get("/api/disponibilidadporfacultad/:idtutor/:idFacultad", disponibilidadController.listarPorTutorYFacultad);

router.post("/api/disponibilidad/listarPrograma/:idprograma/:fecha", disponibilidadController.listarPorProgramaMultipleTutorFecha);

router.get("/api/disponibilidadacumulada/:idPrograma", disponibilidadController.listarDisponibilidadAcumulada);

router.get("/api/disponibilidadvssesiones/:idPrograma", disponibilidadController.listarDisponibilidadVSSesiones);

router.post("/api/disponibilidadIntervalos", disponibilidadController.intervalos);


module.exports = router;