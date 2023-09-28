import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CorseBanner(): JSX.Element {
  return (
    <Card style={{height: '30vw', backgroundImage: 'url(https://catherineasquithgallery.com/uploads/posts/2021-02/1612738791_163-p-fon-sero-belo-goluboi-196.png)', backgroundSize: 'cover' }}>
      <Card.Header style={{ fontSize: '2vw' }}>
        <h1 style={{ marginTop: '25px' ,marginLeft: '50px' }}>Учись прямо сейчас!</h1>
      </Card.Header>
      <Card.Body>
        <Card style={{boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)' ,width: '35vw', marginLeft: '30%' }}>
          <Card.Img style={{ width: '100%' }} variant="top" src='https://profi-way.ru/wp-content/uploads/podrobnaya-instruktsiya-po-samoobucheniyu-dlya-javascript-programmista-1536x806.jpg' />
          <Card.Body style={{backgroundColor: '#e1e8ee'}}>
            <Card.Title style={{ display: 'flex', justifyContent: 'center',  }}>
              <button type='button' className='rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-110' style={{ padding: '5px' }}>
                Учиться
              </button>
            </Card.Title>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
}