import audio from './audio.mp3'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';

import useSound from 'use-sound';

import SentimentVeryDissatisfiedSharpIcon from '@material-ui/icons/SentimentVeryDissatisfiedSharp';

export default function Song() {
    const [play, { stop }] = useSound(audio);

    return (
        <div>
            <h6 style={{ color: 'red' }}>If BoReD <SentimentVeryDissatisfiedSharpIcon /></h6>
            <MusicNoteIcon style={{ color: 'blue' }} onClick={() => play()} />
            <MusicOffIcon style={{ color: 'red' }} onClick={() => stop()} />
        </div >
    );
};

