import audio from './1525868875_joji-yeah-right-www_muzonov_net.mp3'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';

import useSound from 'use-sound';


export default function Song() {
    const [play, { stop }] = useSound(audio);

    return (
        <div>
            <MusicNoteIcon style={{ color: 'white' }} onClick={() => play()} />
            <MusicOffIcon style={{ color: 'white' }} onClick={() => stop()} />
        </div >
    );
};

