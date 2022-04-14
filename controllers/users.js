// import uuid untuk generate unique id 
const uuid = require('uuid').v4;

// import data statis
let users = require('../db/users.json');
let notifications = require('../db/notifications.json');

// ambil 1 data
const getSingleData = (req, res) => {
  // ambil path parameter
  const id = req.params.id;

  // cari berdasar id
  const result = users.find((item) => {
    return item.id === id;
  });

  // jika data tidak ditemukan
  if(!result) {
    return res.status(404).json({
      message: 'User not found'
    });
  }

  // jika data ditemukan
  return res.status(200).json({
    message: 'Operation succesful',
    data: result,
  });
};

// ambil semua data
const getAllData = (req, res) => {
  return res.status(200).json({
    message: 'Operation succesful',
    data: users,
  });
};

// buat 1 data baru
const postData = (req, res) => {
  // baca request body
  const name = req.body.name;
  const email = req.body.email;

  // cek jika request body tidak lengkap
  if (!name || !email) {
    return res.status(400).json({
      message: 'Request body is incomplete',
    });
  }

  // siapkan id untuk data baru
  const id = uuid();

  // buat data baru
  const newUser = {
    id,
    name,
    email,
  }

  // tambah ke array
  users.push(newUser);

  // berikan response
  return res.status(201).json({
    message: 'Operation succesful',
    data: newUser,
  });
};

// ganti 1 data
const putData = (req, res) => {
  // ambil path parameter
  const id = req.params.id;

  // baca request body
  const name = req.body.name;
  const email = req.body.email;

  // cek jika request body tidak lengkap
  if (!name || !email) {
    return res.status(400).json({
      message: 'Request body is incomplete',
    });
  }

  // cari berdasar id
  const index = users.findIndex((item) => {
    return item.id === id;
  });

  // jika data tidak ditemukan
  if(index < 0) {
    // buat data baru
    const newUser = {
      id,
      name,
      email,
    }

    // tambah ke array
    users.push(newUser);

    // berikan response
    return res.status(201).json({
      message: 'Operation succesful',
      data: newUser,
    });
  }
  
  // perbarui data
  users[index].name = name;
  users[index].email = email;

  // berikan response
  return res.status(200).json({
    message: 'Operation successful',
    data: users[index],
  });
};

// perbarui sebagian 1 data
const patchData = (req, res) => {
  // ambil path parameter
  const id = req.params.id;

  // baca request body
  const name = req.body.name;
  const email = req.body.email;

  // cari berdasar id
  const index = users.findIndex((item) => {
    return item.id === id;
  });

  // jika data tidak ditemukan
  if(index < 0) {
    return res.status(404).json({
      message: 'User not found'
    });
  }

  // perbarui data secara kondisional
  if (!!name) {
    users[index].name = name;
  }
  
  if (!!email) {
    users[index].email = email;
  }

  // berikan response
  return res.status(200).json({
    message: 'Operation successful',
    data: users[index],
  });
};

// hapus 1 data
const deleteData = (req, res) => {
  // ambil path parameter
  const id = req.params.id;

  // cari berdasar id
  const result = users.find((item) => {
    return item.id === id;
  });

  // jika data tidak ditemukan
  if(!result) {
    return res.status(404).json({
      message: 'User not found'
    });
  }

  users = users.filter((item) => {
    return item.id !== id;
  });
  
  // berikan response
  return res.status(200).json({
    message: 'Operation succesful',
  });
};

// ambil semua notification milik 1 user
const getUsersNotification = (req, res) => {
  // ambil path parameter
  const id = req.params.id;

  // salin array
  let results = [...notifications];

  // cari berdasar user_id
  results = results.filter((item) => {
    return item.user_id === id;
  });

  // selalu berikan response 200 meskipun results kosong
  return res.status(200).json({
    message: 'Operation succesful',
    data: results,
  });
};

const getAllDataWithMetadata = (req, res) => {
  // ambil query parameter
  const name = req.query.name;
  const email = req.query.email;
  const page = req.query.page || 1; // default page 1
  const limit = req.query.limit || 10; // default batasi 10 data

  // cek jika filter tidak valid
  if (page < 1 || limit < 1) {
    return res.status(400).json({
      message: 'Filter is invalid',
    });
  }

  // salin array agar tidak merubah array users secara langsung 
  let results = [...users];
  
  // jika ada query name, cari berdasar name
  if (!!name) {
    results = results.filter((item) => {
      return item.name.includes(name);
    });
  }

  // jika ada query email, cari berdasar email
  if (!!email) {
    results = results.filter((item) => {
      return item.email.includes(email);
    });
  }

  // filter berdasar page & limit
  const minData = (page - 1) * limit;
  const maxData = page * limit;

  results = results.slice(minData, maxData)

  // selalu berikan response 200 meskipun results kosong, agar bentuk response konsisten
  return res.status(200).json({
    message: 'Operation succesful',
    data: results,
    page: page,
    size: results.length,
    total: users.length,
  });
};

module.exports = {
  getSingleData,
  getAllData,
  postData,
  putData,
  patchData,
  deleteData,
  getUsersNotification,
  getAllDataWithMetadata,
}