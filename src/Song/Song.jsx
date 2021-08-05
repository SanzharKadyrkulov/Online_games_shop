import useSound from 'use-sound';
import audio from './audio.mp3'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';
export default function Song() {
    const [play, { stop }] = useSound(audio);

    return (
        <div>
            <MusicNoteIcon style={{ color: 'white' }} onClick={() => play()} />
            <MusicOffIcon style={{ color: 'white' }} onClick={() => stop()} />
        </div >
    );
};

