import React, { useState, useEffect } from 'react'
import PageContainer from '../../components/page-container'
import {
  ProfileDiv,
  UserImage,
  MainButton,
  FemaleIcon,
  MaleIcon,
  NonBinaryIcon,
  UninformedGenderIcon,
  LocationIcon,
  ImageInput,
  ImageInputWrapper,
  TitleContainer,
  CloseIcon,
  Title
} from './styles'
import { DropdownItem } from '../../types/input';
import DropDownInput from '../../components/dropdown-input'
import SimpleInput from '../../components/simple-input'
import api from '../../services/api';
import UserPic from '../../styles/assets/User.jpg'
import { validateCPF } from '../../utils/cpfValidator'

import { useAuth } from '../../hooks/auth'
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import MaskInput from '../../components/input-mask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const UserProfile: React.FC = () => {
  const navigate = useNavigate();

  const yupUserValidator = yup.object().shape({
    name: yup.string(),
    email: yup.string().email('Invalid email format'),
    cellphone: yup
      .number()
      .test('length', 'Document ID must be exactly 11 digits', (value) => {
        if (value == null) {
          return false
        }
        return value.toString().length === 11;
      }),
    document_id: yup
      .number()
      .test('length', 'Document ID must be exactly 11 digits', (value) => {
        if (value == null) {
          return false
        }
        return value.toString().length === 11;
      }),
    birthdate: yup.date(),
    course: yup.string(),
    bio: yup.string(),
    gender: yup.string(),
    id_university: yup.string(),
  });

  const { user, isTokenExpired, signOut } = useAuth()

  const [name, setName] = useState(user.name)
  const [profileImage, setProfileImage] = useState(user.profile_img)
  const [imageFile, setImageFile] = useState<File>();
  const [gender, setGender] = useState(user.gender)
  const [email, setEmail] = useState(user.email)
  const [bio, setBio] = useState(user.bio)
  const [cellphone, setCellphone] = useState<string | number>('');
  const [cpf, setCpf] = useState(user.document_id)
  const [course, setCourse] = useState(user.course)
  const [university, setUniversity] = useState(user.university.name)
  const [birthdate, setBirthdate] = useState(user.birthdate)
  const [universityRecommendations, setUniversityRecommendations] = useState<Array<DropdownItem>>([])
  const [genderRecommendations, setGenderRecommendations] = useState<Array<DropdownItem>>([])

  const uploadImage = (file: File) => {
    let image_url = null

    let formData = new FormData();

    formData.append("file", file);

    api.post('/user/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    })
      .then((response) => {
        const user = response.data;
        console.log('Image uploaded successfully:', response.data);
        localStorage.setItem('@ParDeJarro:user', JSON.stringify(user))
      })
      .catch((error) => {
        console.error('Image upload failed:', error);
      });

    return image_url;
  }

  const updateUser = () => {
    if (imageFile != null) {
      uploadImage(imageFile);
    }
    const userToUpdate = {
      name: name,
      email: email,
      cellphone: cellphone,
      document_id: cpf,
      birthdate: birthdate,
      course: course,
      bio: bio,
      gender: gender,
      id_university: user.university.id_university
    }
    yupUserValidator.validate(userToUpdate)
      .then(function (value) {
        api.put('/user', userToUpdate).then((response) => {
          toast.success("User updated with success")
          const user = response.data
          localStorage.setItem('@ParDeJarro:user', JSON.stringify(user))

        }).catch(() => {
          toast.error("Algo de errado ocorreu na sua solicitação")
        })
      })
      .catch(function (err) {
        toast.error(err);
      });
  }

  const getGenders = () => {
    const genders = [
      {
        value: "female",
        label: "Feminino",
        icon: (<FemaleIcon />)
      },
      {
        value: "male",
        label: "Masculino",
        icon: (<MaleIcon />)
      },
      {
        value: "non-binary",
        label: "Não binário",
        icon: (<NonBinaryIcon />)
      },
      {
        value: "uninformed",
        label: "Não informado",
        icon: (<UninformedGenderIcon />)
      }
    ]

    setGenderRecommendations(genders)
  }

  const getUniversities = () => {
    (
      api.get('/university')
        .then((response) => {
          const universities = response.data.map((elem: { name: string, id_university: string }) => {
            return {
              value: elem.id_university,
              label: elem.name,
              icon: (<LocationIcon />)
            }
          })

          setUniversityRecommendations(universities)
        })
        .catch((error) => {
          toast.error("Algo de errado ocorreu em carregar dados da univer")
          console.error('Retrieve university data failed: ', error);
        })
    )
  }

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList;
    setImageFile(selectedFiles?.[0]);
    setProfileImage(URL.createObjectURL(selectedFiles?.[0]));
  };

  const goBack = () => {
    navigate(-1);
  }

  const signOutIfTokenIsExpired = () => {
    if (isTokenExpired()) {
      signOut()
      navigate('/signIn')
    }
  }

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cpf = (e.target.value);
    if (!validateCPF(cpf)) {
      toast.error("CPF inválido")
      return
    }
    setCpf(cpf)
  }


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = (e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Email inválido");
      return;
    }
    setEmail(email);
  }

  const getValueWithoutMask = (value: string) => {
    return value
      .replaceAll('.', '')
      .replace('-', '')
      .replace('(', '')
      .replace(')', '')
  }

  useEffect(() => {
    signOutIfTokenIsExpired()
    getGenders()
    getUniversities()
    setName(user.name)
    setProfileImage(user.profile_img)
    setGender(user.gender)
    setEmail(user.email)
    setBio(user.bio)
    setCellphone(user.cellphone)
    setCpf(user.document_id)
    setCourse(user.course)
    setUniversity(user.university.name)
  }, [user.name,
  user.gender,
  user.email,
  user.bio,
  user.cellphone,
  user.document_id,
  user.course,
  user.university.name,
  user.profile_img])

  return (
    <>
      <PageContainer>
        <TitleContainer>
          <CloseIcon onClick={goBack} size={30} color='black' />
          <Title>Meu Perfil</Title>
        </TitleContainer>
        <ProfileDiv>
          <UserImage src={profileImage || UserPic} />
          <ImageInputWrapper>
            <ImageInput type="file" accept="image/*" onChange={selectImage}></ImageInput>
          </ImageInputWrapper>
          <SimpleInput
            label='Nome'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <SimpleInput
            label='Email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <MaskInput
            label='Telefone'
            value={cellphone.toString()}
            mask="(99)99999-9999"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const valueWithoutMask = getValueWithoutMask(e.target.value);
              setCellphone(valueWithoutMask);
            }}
          />
          <MaskInput
            label='CPF'
            value={cpf}
            mask="999.999.999-99"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              return setCpf(getValueWithoutMask(e.target.value));
            }}
          />
          <SimpleInput
            label='Data de nascimento'
            value={birthdate}
            onChange={(e) => {
              setBirthdate(e.target.value)
            }}
            type='date'
          />
          <DropDownInput
            recommendations={genderRecommendations}
            onSelectItem={(item) => { setGender(item.value) }}
            label='Gênero'
            inputValue={gender}
            onInputValueChange={setGender}
          />
          <DropDownInput
            recommendations={universityRecommendations}
            onSelectItem={(item) => { setUniversity(item.value) }}
            label='Universidade'
            inputValue={university}
            onInputValueChange={setUniversity}
          />
          <SimpleInput
            label='Curso'
            value={course}
            onChange={(e) => {
              setCourse(e.target.value)
            }}
          />
          <SimpleInput
            label='Bio'
            value={bio}
            onChange={(e) => {
              setBio(e.target.value)
            }}
          />
          <MainButton onClick={updateUser}>Editar</MainButton>
        </ProfileDiv>
      </PageContainer>
    </>
  )
}

export default UserProfile