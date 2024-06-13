import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
 
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #f0f2f5, #d6e4ff);
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #3f51b5;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
`;

const DashboardButton = styled.button`
  padding: 15px;
  font-size: 1.2em;
  color: white;
  background: #3f51b5;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #303f9f;
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      <ButtonContainer>
        <DashboardButton onClick={() => navigate('/most-active')}>Most Active</DashboardButton>
        <DashboardButton onClick={() => navigate('/top-gainers')}>Top Gainers</DashboardButton>
        <DashboardButton onClick={() => navigate('/top-losers')}>Top Losers</DashboardButton>
        <DashboardButton onClick={() => navigate('/wishlist')}>Wishlist</DashboardButton>
      </ButtonContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
