import express from 'express';
import userContrller from '../controllers/userController';
import homeController from '../controllers/homeController';
import doctorController from '../controllers/doctorController';
import clinicController from '../controllers/clinicController';
import patientController from '../controllers/patientController';
import handBookController from '../controllers/handBookController';
import specialtyController from '../controllers/specialtyController';

let router = express.Router();

let initWebRoutes = (app) => {
  // ---------------- homeController ----------------
  router.get('/', homeController.getHomePage);
  router.get('/about', homeController.getAboutPage);
  router.get('/crud', homeController.getCRUD);
  router.get('/get-crud', homeController.dislayGetCRUD);
  router.get('/edit-crud', homeController.getEditCRUD);
  router.get('/delete-crud', homeController.deleteCRUD);
  router.post('/put-crud', homeController.putCRUD);
  router.post('/post-crud', homeController.postCRUD);

  // ---------------- userContrller ----------------
  router.get('/api/get-all-users', userContrller.handleGetAllUsers);
  router.get('/api/allcode', userContrller.getAllCode);
  router.post('/api/login', userContrller.handleLogin);
  router.put('/api/edit-user', userContrller.handleEditUser);
  router.post('/api/create-new-user', userContrller.handleCreateNewUser);
  router.delete('/api/delete-user', userContrller.handleDeleteUser);

  // ---------------- doctorController ----------------
  router.get('/api/top-doctor-home', doctorController.getTopDoctorHome);
  router.get('/api/get-all-doctors', doctorController.getAllDoctors);
  router.get(
    '/api/get-detail-doctor-by-id',
    doctorController.getDetailDoctorById
  );
  router.post('/api/create-schedule', doctorController.bulkCreateSchedule);
  router.get(
    '/api/get-schedule-doctor-by-date',
    doctorController.getScheduleByDate
  );
  router.get(
    '/api/get-extra_infor-doctor-by-id',
    doctorController.getExtraInforDoctorById
  );
  router.get(
    '/api/get-profile-doctor-by-id',
    doctorController.getProfileDoctorById
  );
  router.get(
    '/api/get-list-patient-for-doctor',
    doctorController.getListPatientForDoctor
  );
  router.post('/api/save-infor-doctor', doctorController.postInforDoctor);
  router.post('/api/send-remedy', doctorController.sendRemedy);
  router.post('/api/send-online-class-room', doctorController.sendOnlineClinic);
  router.post(
    '/api/send-blocked-notification',
    doctorController.sendBlockedNotification
  );
  router.get(
    '/api/get-medical-record-for-doctor',
    doctorController.getAllPatientForDoctor
  );

  router.get(
    '/api/get-patient-for-doctor-by-id',
    doctorController.getPatientforDoctorById
  );

  // ---------------- patientController ----------------
  router.get('/api/get-all-patient', patientController.getAllPatient);
  router.get(
    '/api/get-all-patient-payment',
    patientController.getAllPatientPayment
  );
  router.post('/api/patient-payment', patientController.patientPayment);
  router.post(
    '/api/patient-book-appointment',
    patientController.postBookAppointment
  );
  router.post(
    '/api/verify-book-appointment',
    patientController.postVerifyBookAppointment
  );

  // ---------------- specialtyController ----------------
  router.get('/api/get-all-specialty', specialtyController.getAllSpecialty);
  router.get('/api/get-top-specialty', specialtyController.getTopSpecialty);
  router.get(
    '/api/get-detail-specialty-by-id',
    specialtyController.getDetailSpecialtyById
  );
  router.post(
    '/api/create-new-specialty',
    specialtyController.createNewSpecialty
  );
  router.delete(
    '/api/delete-specialty',
    specialtyController.handleDeleteSpecialty
  );
  router.put('/api/edit-specialty', specialtyController.handleEditSpecialty);

  // ---------------- clinicController ----------------
  router.get('/api/get-all-clinic', clinicController.getAllClinic);
  router.get('/api/get-top-clinic', clinicController.getTopClinic);

  router.get(
    '/api/get-detail-clinic-by-id',
    clinicController.getDetailClinicById
  );
  router.post('/api/create-new-clinic', clinicController.createNewClinic);
  router.delete('/api/delete-clinic', clinicController.handleDeleteClinic);
  router.put('/api/edit-clinic', clinicController.handleEditClinic);

  // ---------------- handBookController ----------------
  router.get('/api/get-all-hand-book', handBookController.getAllHandBook);
  router.get('/api/get-top-hand-book', handBookController.getTopHandBook);
  router.get(
    '/api/get-detail-hand-book-by-id',
    handBookController.getDetailHandBookById
  );
  router.post(
    '/api/create-new-hand-book',
    handBookController.createNewHandBook
  );
  router.put('/api/edit-hand-book', handBookController.handleEditHandBook);
  router.delete(
    '/api/delete-hand-book',
    handBookController.handleDeleteHandBook
  );

  return app.use('/', router);
};
module.exports = initWebRoutes;
