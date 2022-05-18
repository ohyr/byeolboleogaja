import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { Logout, VolumeUp, Public, QuestionMark, DoNotStep } from '@mui/icons-material';
import SoundDialog from '@/components/SoundDialog';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { bgmInfo } from '@/constants';

const Menu = ({ isGuideDialog, isWorld, setGuideOpen, placeBGM }) => {
  const navigate = useNavigate();

  const [value1, setValue1] = useState(0.2);
  const [value2, setValue2] = useState(0.2);

  const [anchor1El, setAnchor1El] = useState(null);
  const [anchor2El, setAnchor2El] = useState(null);

  const audioSetting = document.querySelector('#soundVolume');
  const footstepsSetting = document.querySelector('#footsteps');
  useEffect(() => {
    const audioSetting = document.querySelector('#soundVolume');
    const nowPlaceBGM = bgmInfo.filter((item, idx) => item.place == placeBGM);
    if (Object.keys(nowPlaceBGM).length != 0) {
      audioSetting.src = nowPlaceBGM[0].bgm;
      audioSetting.volume = 0.2;
    }

    const footstepsSetting = document.querySelector('#footsteps');
    const footstepsBGM = bgmInfo.filter((item, idx) => item.place == 'everywhere');
    if (Object.keys(footstepsBGM).length != 0) {
      footstepsSetting.src = footstepsBGM[0].bgm;
      footstepsSetting.volume = 0.2;
    }

    window.addEventListener('keydown', function (e) {
      if (e.key == 'w' || e.key == 'a' || e.key == 's' || e.key == 'd') {
        footstepsSetting.play();
      }
    });
  }, []);
  const goMain = () => {
    navigate('/');
  };
  const controlSounds = (event) => {
    setAnchor1El(event.currentTarget);
  };
  const controlSounds2 = (event) => {
    setAnchor2El(event.currentTarget);
  };
  const goWorld = () => {
    navigate('/world');
  };

  const openGuide = () => {
    setGuideOpen(true);
  };

  const actionMenu = [
    { icon: <Logout />, name: '종료하기', move: goMain },
    { icon: <VolumeUp />, name: '배경음악 조절', move: controlSounds },
    { icon: <DoNotStep />, name: '발소리 조절', move: controlSounds2 },
    
    isWorld ? { icon: <Public />, name: '월드로 돌아가기', move: goWorld } : {},
    isGuideDialog
      ? {
          icon: <QuestionMark />,
          name: '가이드 보기',
          move: openGuide,
        }
      : {},
  ];
  const newActionMenu = actionMenu.filter(
    (element, i) => Object.keys(element).length != 0,
  );

  return (
    <>
      <audio
        id="soundVolume"
        src="#"
        volume={value1}
        autoPlay={true}
        loop={true}
      ></audio>
      <audio
        id="footsteps"
        src="#"
        volume={value2}
      ></audio>
      <SpeedDial
        ariaLabel="Museum menu"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {newActionMenu.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.move}
          />
        ))}
      </SpeedDial>
      <SoundDialog
        anchorEl={anchor1El}
        setAnchorEl={setAnchor1El}
        value={value1}
        setValue={setValue1}
        audioSetting={audioSetting}
      />
      <SoundDialog
        anchorEl={anchor2El}
        setAnchorEl={setAnchor2El}
        value={value2}
        setValue={setValue2}
        audioSetting={footstepsSetting}
      />
    </>
  );
};
export default Menu;
