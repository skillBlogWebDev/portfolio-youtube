import { useMediaQuery } from '../../hooks/index';
const ArrowSvg = () => {
    const isMobile = useMediaQuery(800);
    const currentWidth = isMobile ? 54 : 80;
    const currentHeight = isMobile ? 40 : 60;

    return (
        <svg width={currentWidth} height={currentHeight} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g style={{ mixBlendMode: 'saturation' }}>
                <path d="M70.864 24.5368C74.8361 26.8137 74.8948 32.5227 70.9704 34.8836L49.5805 47.7516C45.6051 50.1432 40.5369 47.3128 40.4893 42.6743L40.2294 17.3962C40.1817 12.7578 45.1906 9.82014 49.2143 12.1267L70.864 24.5368Z" fill="#0DFFFF"/>
            </g>
            <g style={{ mixBlendMode: 'exclusion' }}>
                <path d="M50.1721 24.8263C54.1206 27.1454 54.1206 32.8546 50.1721 35.1737L23.7837 50.6722C19.7839 53.0214 14.7451 50.1372 14.7451 45.4985V14.5015C14.7451 9.8628 19.7839 6.97863 23.7837 9.32783L50.1721 24.8263Z" fill="#1222B0"/>
            </g>
        </svg>
    );
}

export default ArrowSvg;