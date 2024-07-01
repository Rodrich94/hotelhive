import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, List, message, Modal } from 'antd';
import axios from '../axiosConfig';

const ReservationsByDNI = () => {
  const { dni } = useParams();
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  useEffect(() => {
    if (dni) {
      fetchReservations();
    }
  }, [dni]);

  const fetchReservations = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/reservations/dni/${dni}`);
      setReservations(response.data);
      if (response.data.length === 0) {
        message.info('No se encontraron reservas para este DNI.');
      }
    } catch (error) {
      console.error('Error fetching reservations:', error);
      message.error('Error al obtener las reservas.');
    }
    setLoading(false);
  };

  const deleteReservation = async (id) => {
    try {
      await axios.delete(`/api/reservations/${id}`);
      message.success('Reserva eliminada con éxito.');
      fetchReservations();
      handleCancel(); // Cerrar el modal después de eliminar
    } catch (error) {
      console.error('Error deleting reservation:', error);
      message.error('Error al eliminar la reserva.');
    }
  };

  const confirmDelete = (reservation) => {
    setSelectedReservation(reservation);
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setSelectedReservation(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Button type="primary" style={{ marginBottom: '10px' }}>
        <Link to={`/reservas`}>Nueva Reserva</Link>
      </Button>

      <List
        itemLayout="horizontal"
        dataSource={reservations}
        loading={loading}
        renderItem={(reservation) => (
          <List.Item
            key={reservation.id_reservation}
            actions={[
              <Button type="link" onClick={() => confirmDelete(reservation)}>
                Eliminar
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={`Reserva ID: ${reservation.id_reservation}`}
              description={`Habitación ID: ${reservation.id_room} | Fecha Inicio: ${reservation.fecha_inicio} | Fecha Fin: ${reservation.fecha_fin}`}
            />
          </List.Item>
        )}
      />

      <Modal
        title="Confirmar eliminación"
        visible={modalVisible}
        onOk={() => deleteReservation(selectedReservation.id_reservation)}
        onCancel={handleCancel}
        okText="Eliminar"
        cancelText="Cancelar"
      >
        <p>¿Estás seguro que deseas eliminar esta reserva?</p>
      </Modal>
    </div>
  );
};

export default ReservationsByDNI;
