import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/store';
import { Button, Container, Typography } from '@mui/material';
import LoadingScene from '../components/LoadingScene';

export default function WorldMap() {
  const navigate = useNavigate();
  const nickname = useStore((state) => state.nickname);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 5000);
    }
  }, []);

  const handleGoWorld = () => {
    navigate('/world');
  };

  const handleGoStellarium = () => {
    window.location = 'https://stellarium-web.org/';
  };

  const handleGoLibrary = () => {
    navigate('/vite');
  };

  const handleGoFortune = () => {
    navigate('/vite');
  };

  const handleGoMuseum = () => {
    navigate('/vite');
  };

  const handleGoSpace = () => {
    navigate('/vite');
  };

  return (
    <>
      {isLoading ? (
        <LoadingScene />
      ) : (
        <Container
          maxWidth="sm"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              mt: '5vh',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            {`${nickname} 님 반가워요!`}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: '5vh', width: 'min(375px, 90%)' }}
            onClick={handleGoWorld}
          >
            <Typography
              sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              ★ 월드 입장 ★
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ mt: '5vh', width: 'min(375px, 90%)' }}
            onClick={handleGoStellarium}
          >
            <Typography
              sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              별 보러 가기
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ mt: '5vh', width: 'min(375px, 90%)' }}
            onClick={handleGoLibrary}
          >
            <Typography
              sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              도서관 가기
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ mt: '5vh', width: 'min(375px, 90%)' }}
            onClick={handleGoFortune}
          >
            <Typography
              sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              별자리 운세 보기
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ mt: '5vh', width: 'min(375px, 90%)' }}
            onClick={handleGoMuseum}
          >
            <Typography
              sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              인공위성 박물관 가기
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ mt: '5vh', width: 'min(375px, 90%)' }}
            onClick={handleGoSpace}
          >
            <Typography
              sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              우주여행 하기
            </Typography>
          </Button>
        </Container>
      )}
    </>
  );
}
