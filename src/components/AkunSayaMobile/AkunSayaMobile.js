import React, { useEffect } from "react";
import MediaQuery from "react-responsive";
// import axios from "axios";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
// import setLoginStatus from "../../redux/actions/setLoginStatus";
import getUserDetail from "../../redux/actions/getUserDetail";
import authService from "../../services/auth.service";

// css
import "./AkunSayaMobile.css";

// images
import defaultPP from "../../img/upFoto.png";

const AkunSayaMobile = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/auth/login");
  };

  useEffect(() => {
    props.getUserDetail();
  }, []);
  return (
    <div className="mx-3">
      <MediaQuery maxWidth={576}>
        {/* title start */}
        <h1 className="mt-3">Akun Saya</h1>
        {/* title end */}

        {/* foto profil start */}
        <div className="container my-5">
          {props.dataUser.img ? <img src={`data:image/jpeg;base64,${props.dataUser.img}`} className="foto_profil d-flex mx-auto" alt="foto_penjual" /> : <img src={defaultPP} className="foto_profil d-flex mx-auto" alt="foto_penjual" />}
          <h3 className="text-center mt-2">{props.dataUser.nama}</h3>
        </div>
        {/* foto profil end */}

        {/* list menu akun start */}
        <div>
          <ul className="list-group list_menu_akun_saya">
            <a href="edit-profile">
              <li className="list-group-item">
                <i className="bi bi-pencil-square me-3"></i>
                <span>Ubah Akun</span>
              </li>
            </a>

            <a href="/#" onClick={handleLogout}>
              <li className="list-group-item">
                <i className="bi bi-box-arrow-right me-3"></i>
                <span>Keluar</span>
              </li>
            </a>
          </ul>
          <p className="text-center text-secondary mt-3">Version 1.0.0</p>
        </div>
        {/* list menu akun end */}
        {/* navigasi akun mobile start */}
        <div className="ms-2 fixed-bottom">
          <hr></hr>
          <ul className="d-flex list_navigasi_akun_saya">
            <a href="/">
              <li>
                <i className="bi bi-house-door"></i>
                <span>Home</span>
              </li>
            </a>

            <a href="notifikasi">
              <li>
                <i className="bi bi-bell"></i>
                <span>Notifikasi</span>
              </li>
            </a>

            <a href="tambah-product">
              <li>
                <i className="bi bi-plus-circle"></i>
                <span>Jual</span>
              </li>
            </a>

            <a href="daftar-jual">
              <li>
                <i className="bi bi-list-ul"></i>
                <span>Daftar Jual</span>
              </li>
            </a>

            <a href="akun-saya">
              <li className="active">
                <i className="bi bi-person"></i>
                <span>Akun</span>
              </li>
            </a>
          </ul>
        </div>
        {/* navigasi akun mobile end */}
      </MediaQuery>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataUser: state.userReducer.dataUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setLoginStatus: () => dispatch(setLoginStatus()),
    getUserDetail: () => dispatch(getUserDetail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AkunSayaMobile);
