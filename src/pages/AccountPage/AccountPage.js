import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useAuth from "../../auth/useAuth";
import DeleteModal from "../../components/DeleteModal";

const AccountPage = () => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const { user } = useAuth();

  const openDeleteModal = () => setIsOpenDeleteModal(true);
  const closeDeleteModal = () => setIsOpenDeleteModal(false);

  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <img
              src="/img/male_avatar.svg"
              alt="profile"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col className="mt-4">
            <Card style={{ maxWidth: "360px" }} className="mx-auto p-4">
              <p className="text-center">
                <b>Name: </b> {user.name}
              </p>
              <p className="text-center">
                <b>Email: </b> {user.email}
              </p>
              <p className="text-center">
                <b>Role: </b> {user.role}
              </p>
              <Button variant="warning">Edit profile</Button>
              <Button variant="link" className="mt-1">
                Change Password
              </Button>
              <Button
                variant="link"
                className="mt-3 text-danger"
                onClick={openDeleteModal}
              >
                Delete account
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
      <DeleteModal isOpen={isOpenDeleteModal} close={closeDeleteModal} />
    </>
  );
};

export default AccountPage;
