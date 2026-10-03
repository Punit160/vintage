
import React, { useState } from 'react';
import HomeGame from '../screens/Game/HomeGame';
import BoxBreathingGame from '../screens/Game/BoxBreathingGame';
import TapHappyGame from '../screens/Game/TapHappyGame';
import ScoresScreen from '../screens/Game/ScoresScreen';
import { useNavigation } from '@react-navigation/native';

const WellnessArcade = () => {
  const [currentScreen, _setCurrentScreen] = useState('home');
  const [gameScores, setGameScores] = useState<{ boxBreathing: any[]; tapHappy: any[] }>({
    boxBreathing: [],
    tapHappy: [],
  });
  const navigation = useNavigation();

  const addScore = (game: 'boxBreathing' | 'tapHappy', scoreObj: any) => {
    setGameScores(prev => ({ ...prev, [game]: [...prev[game], scoreObj] }));
  };

  const renderScreen = () => {
    const HomeGameAny = HomeGame as any;
    const BoxBreathingGameAny = BoxBreathingGame as any;
    const TapHappyGameAny = TapHappyGame as any;
    const ScoresScreenAny = ScoresScreen as any;

    switch (currentScreen) {
      case 'home':
        return <HomeGameAny navigation={navigation} />;
      case 'breathing':
        return <BoxBreathingGameAny navigation={navigation} addScore={addScore} />;
      case 'tapHappy':
        return <TapHappyGameAny navigation={navigation} addScore={addScore} />;
      case 'scores':
        return <ScoresScreenAny navigation={navigation} gameScores={gameScores} />;
      default:
        return <HomeGameAny navigation={navigation} />;
    }
  };

  return <>{renderScreen()}</>;
};

export default WellnessArcade;
