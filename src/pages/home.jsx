import Cover from '../components/Cover';
import MandatoryPublicDisclosure from '../components/MadetoryDisclouser';
import PictureGallery from '../components/PictureGallery';
import PrincipleMessage from '../components/PrincipleMessage';


export default function Home() {
    return (
        <>
            <Cover />
            <MandatoryPublicDisclosure />
            <PrincipleMessage />
            <PictureGallery />
        </>
    );
}