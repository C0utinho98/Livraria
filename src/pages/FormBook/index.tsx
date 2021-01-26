import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiCamera } from 'react-icons/bi';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input, Button } from '../../components';
import bookImag from '../../assets/book.png';
import { WrapperUpload, Inputs, Form } from './styles';
import {
  createBookRequest,
  getBook,
  updateBookRequest,
  deleteBookRequest,
} from '../../store/reducers/book/actions';
import { IBook } from '../../store/reducers/book/types';
import { IState } from '../../store';

interface ImgProps {
  url: string;
  showError: boolean;
}
interface Book {
  id: string;
  name: string;
  description: string;
  author: string;
  year: string;
  numberPages: number;
  cover: string;
  reserved: boolean;
}

interface ParamsProps {
  id: string;
}

const FormBook: React.FC = () => {
  const history = useHistory();

  const { register, handleSubmit, errors, setValue } = useForm();
  const [img, setImg] = useState<ImgProps>({ url: '', showError: false });

  const { id } = useParams<ParamsProps>();
  const dispatch = useDispatch();
  const bookSelected = useSelector<IState, IBook>(
    state => state.book.bookSelected,
  );
  useEffect(() => {
    if (id) {
      dispatch(getBook(id));
    } else {
      setValue('name', '');
      setValue('description', '');
      setValue('author', '');
      setValue('year', '');
      setValue('numberPages', '');
      setImg({ url: '', showError: false });
    }
  }, [id]);

  useEffect(() => {
    if (bookSelected.id !== '') {
      setValue('name', bookSelected.name);
      setValue('description', bookSelected.description);
      setValue('author', bookSelected.author);
      setValue('year', bookSelected.year);
      setValue('numberPages', bookSelected.numberPages);
      setImg({ url: bookSelected.cover, showError: false });
    }
  }, [bookSelected, setValue]);

  const onSubmit = handleSubmit((data: Book): void => {
    if (img.url === '') {
      setImg(prevSate => ({ ...prevSate, showError: true }));
    } else if (id) {
      if (bookSelected.reserved) {
        toast.error('Você não pode atualizar um livro que está reservado');
      } else {
        history.push('/main');
        dispatch(updateBookRequest({ ...data, cover: img.url, id }));
      }
    } else {
      history.push('/main');
      dispatch(createBookRequest({ ...data, cover: img.url }));
    }
  });

  const handleAvatar = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          if (reader.result) {
            setImg({
              showError: false,
              url: reader.result as string,
            });
          }
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }, []);

  const deleteBook = useCallback(() => {
    if (bookSelected.reserved) {
      toast.error('Você não pode atualizar um livro que está reservado');
    } else {
      history.push('/main');
      dispatch(deleteBookRequest(bookSelected.id));
    }
  }, [bookSelected.id, bookSelected.reserved, dispatch]);

  return (
    <Form autoComplete="off" onSubmit={onSubmit}>
      <IoArrowBack
        size={30}
        onClick={() => history.push('/main')}
        data-testid="back-button-test"
      />
      <WrapperUpload>
        <div>
          <img src={img.url === '' ? bookImag : img.url} alt="test" />
          <label htmlFor="avatar">
            <BiCamera size={20} color="#000" />
            <input
              type="file"
              id="avatar"
              onChange={handleAvatar}
              accept="image/*"
              data-testid="upload-test"
            />
          </label>
        </div>
        {img.showError && (
          <span style={{ color: '#ff9000' }}>
            Para salvar, é preciso escolher uma capa
          </span>
        )}
      </WrapperUpload>
      <Inputs>
        <strong>Informações do livro</strong>
        <Input
          name="name"
          placeholder="Nome do livro"
          inputRef={register({ required: true })}
          msgError="Nome é obrigatório"
          error={errors.name}
        />
        <Input
          name="description"
          placeholder="Descrição"
          inputRef={register({ required: true })}
          msgError="Descrição é obrigatório"
          error={errors.description}
        />
        <Input
          name="author"
          placeholder="Autor"
          inputRef={register({ required: true })}
          msgError="Nome do autor é obrigatório"
          error={errors.author}
        />
        <Input
          name="year"
          placeholder="Ano de lançamento"
          inputRef={register({ required: true })}
          msgError="Ano do lançamento é obrigatório"
          error={errors.year}
          type="number"
        />
        <Input
          name="numberPages"
          placeholder="Número de páginas"
          inputRef={register({ required: true })}
          msgError="Numero de página é obrigatório"
          error={errors.numberPages}
          type="number"
        />
      </Inputs>
      {id ? (
        <>
          <Button type="button" color="#CD5C5C" onClick={deleteBook}>
            Excluir
          </Button>
          <Button type="submit">Editar</Button>
        </>
      ) : (
        <Button type="submit">Cadastar</Button>
      )}
    </Form>
  );
};

export default FormBook;
