import './CreateUser.scss';
import React, { useState } from 'react';
import Surface from '@hig/surface';
import Input from '@hig/input';
import Button from '@hig/button';
import Spacer from '@hig/spacer';
import Typography from '@hig/typography';

const CreateUser = ({ options }) => {
  const { description } = options || '';
  const [state] = useState('Create New User');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmited, setSubmited] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmited(true)
  }

  return (
    <>
    <Surface
      level={100}
      horizontalPadding="l"
      verticalPadding="l"
      shadow="low"
      borderRadius="s"
      className="surface"
    >
      {!isSubmited && 
        <form onSubmit={handleSubmit}>
          <Typography align="left" fontWeight="normal" variant="h3">
            {state}
          </Typography>
          <Typography align="left" fontWeight="normal" variant="body">
            {description}
          </Typography>
          <Spacer spacing="m"/>
          <Input
            value={name}
            variant='box'
            placeholder="name"
            onChange={e => setName(e.target.value)}
          />
          <Spacer spacing="m"/>
          <Input
            value={password}
            variant='box'
            type="password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
          <Spacer spacing="m"/>
          <Button
            size="standard"
            title="Save"
            type="primary"
          />
        </form>
      }
      {isSubmited && 
        <>
          <Typography align="left" fontWeight="normal" variant="h3">
            Form submited!
          </Typography>
          <Spacer spacing="m"/>
          <Button
            size="standard"
            title="Back"
            type="primary"
            onClick={() => setSubmited(false)}
          />
        </>
      }
    </Surface>
    </>
  )
}

export default CreateUser;