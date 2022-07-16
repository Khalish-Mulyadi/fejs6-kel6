import React, {  } from 'react'
import './ModalDefault.css'
import { Card, Row, Col, Modal } from 'react-bootstrap'
import whatsapp from '../../img/fi_whatsapp.svg'
import pembeli from '../../img/Rectangle 33.png'
import barang from '../../img/jamtangan.png'


export const ModalDefault = ({Approve, imgPembeli, imgBarang, hargaDitawar, harga, namaBarang, kota, namaPembeli, parambtn, onHide , ...props}) => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='container-modal-utama-modaldefault'
    >


      <Card className='card-modal'>
        <div className='container-modal'>
          <div className='container-btn-close-modalDefault'>
            <button className='btn-close-modaldefault' onClick={onHide}>&#x2715;</button>
          </div>

          <div className='txt-judul-modaldefault'>
            <strong>
              Yeay kamu berhasil mendapat harga yang sesuai
            </strong>
          </div>

          <div className='txt1-modaldefault'>
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
          </div>


          <Card className='card-content-item'>
            <div className='container-content-modaldefault'>
              <strong className='title-modaldefault'>
                Product Match
              </strong>

              <div className='container-namapembeli-modaldefault'>
                <Row>
                  <Col xs={3}>
                    <img alt='' className='imgpembeli-modaldefault' src={`data:image/png;base64,${imgPembeli}`} />
                  </Col>

                  <Col xs={9}>
                    <div className='container-detailpembeli-modaldefault'>
                      <Row>
                        <Col xs={12}>
                          <div className='namapembeli-modaldefault'>
                            {namaPembeli}
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs={12}>
                          <div className='kota-modaldefault'>
                            {kota}
                          </div>
                        </Col>
                      </Row>
                    </div>

                  </Col>
                </Row>
              </div>

              <div className='container-namabarang-modaldefault'>
                <Row>
                  <Col xs={3}>
                    <img alt='' className='imgbarang-modaldefault' src={`data:image/png;base64,${imgBarang}`} />
                  </Col>

                  <Col xs={9}>
                    <div className='container-detailpembeli-modaldefault'>
                      <Row>
                        <Col xs={12}>
                          <div className='namabarang-modaldefault'>
                            {namaBarang}
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs={12}>
                          <div className='harga-modaldefault'>
                            {harga}
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs={12}>
                          <div className='namabarang-modaldefault'>
                            Ditawar {hargaDitawar}
                          </div>
                        </Col>
                      </Row>

                    </div>
                  </Col>
                </Row>
              </div>


            </div>
          </Card>

          <div className='container-btn-modaldefault'>

            <button className='btn-modaldefault' onClick={()=>{parambtn()}}>
              Hubungi via Whatsapp

            </button>
            <img alt='' src={whatsapp} className="whatsapp-btn-modaldefault" />

          </div>

        </div>
      </Card>

    </Modal>


  )
}
