import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Contact() {
    const mapState = { center: [55.513030, 37.003313], zoom: 10 };
    return (
        <div>
            <div className='container'>
                <h1>Мы находимся:</h1>
            </div>
            <div className='contact-container'>
                <p className='adress'>Московская область, Наро-Фоминский район, д. Софьино, 138</p>
                <p className='phone'>8-903-181-51-67</p>
                <h3>Схема проезда:</h3>
            </div>
            <div className='container'>
                <YMaps>
                        <Map state={mapState}>
                        <Placemark
                        geometry={{
                        type: "Point",
                        coordinates: [55.513030, 37.003313]
                        }}
                        properties={{
                        iconCaption: 'ТД Фарком'
                        }}
                        />
                        </Map>
                </YMaps>
            </div>
        </div>
    )
}

export default Contact;
