import userService from '../services/userService';

let handleLogin = async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
      return res.status(500).json({
        errCode: 1,
        message: 'Missing inputs parameter!!!',
      });
    }

    let userData = await userService.handleUserLogin(email, password);
    return res.status(200).json({
      errCode: userData.errCode,
      message: userData.errMessage,
      user: userData ? userData.user : {},
    });
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from the server !',
    });
  }
};

let handleGetAllUsers = async (req, res) => {
  try {
    let id = req.query.id; //All id
    if (!id) {
      return res.status(200).json({
        errCode: 0,
        errMessage: 'Missing required parameter !!!',
        users: [],
      });
    }

    let users = await userService.getAllUsers(id);
    return res.status(200).json({
      errCode: 0,
      errMessage: 'OK',
      users,
    });
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from the server !',
    });
  }
};

let handleCreateNewUser = async (req, res) => {
  try {
    let message = await userService.createNewUser(req.body);
    return res.status(200).json(message);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from the server !',
    });
  }
};

let handleEditUser = async (req, res) => {
  try {
    let data = req.body;
    let message = await userService.updateUserData(data);

    return res.status(200).json(message);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from the server !',
    });
  }
};

let handleDeleteUser = async (req, res) => {
  try {
    if (!req.body.id) {
      return res.status(200).json({
        errCode: 1,
        errMessage: 'Missing required parameters !!!',
      });
    }
    let message = await userService.deleteUser(req.body.id);
    return res.status(200).json(message);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from the server !',
    });
  }
};

let getAllCode = async (req, res) => {
  try {
    let data = await userService.getAllCodeService(req.query.type);
    return res.status(200).json(data);
  } catch (e) {
    console.log('get allcode: ', e);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server !',
    });
  }
};

module.exports = {
  handleLogin: handleLogin,
  handleGetAllUsers: handleGetAllUsers,
  handleCreateNewUser: handleCreateNewUser,
  handleEditUser: handleEditUser,
  handleDeleteUser: handleDeleteUser,
  getAllCode: getAllCode,
};
