import audio from './1525868875_joji-yeah-right-www_muzonov_net.mp3'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';

import useSound from 'use-sound';

import SentimentVeryDissatisfiedSharpIcon from '@material-ui/icons/SentimentVeryDissatisfiedSharp';

export default function Song() {
    const [play, { stop }] = useSound(audio);

    return (
        <div>
            <h6 style={{ color: '#b8edfe' }}>If BoReD <SentimentVeryDissatisfiedSharpIcon /></h6>
            <MusicNoteIcon style={{ color: '#19bbef' }} onClick={() => play()} />
            <MusicOffIcon style={{ color: '#0d6efd' }} onClick={() => stop()} />
        </div >
    );
};

