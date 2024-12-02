import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostComments from './index';  

describe('PostComments Component', () => {
    it('deve renderizar a lista de comentários vazia inicialmente', () => {
        render(<PostComments />);

        const commentItems = screen.queryAllByTestId('comment-item');
        expect(commentItems).toHaveLength(0);
    });

    it('deve adicionar um comentário ao clicar no botão de comentar', () => {
        render(<PostComments />);

        const input = screen.getByTestId('comment-input');
        fireEvent.change(input, { target: { value: 'Primeiro comentário' } });

        const submitButton = screen.getByTestId('submit-button');
        fireEvent.click(submitButton);

        const commentItems = screen.getAllByTestId('comment-item');
        expect(commentItems).toHaveLength(1);
        expect(commentItems[0]).toHaveTextContent('Primeiro comentário');
    });

    it('deve adicionar múltiplos comentários ao clicar no botão de comentar', () => {
        render(<PostComments />);

        const input = screen.getByTestId('comment-input');
        const submitButton = screen.getByTestId('submit-button');

        fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);

        fireEvent.change(input, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);

        const commentItems = screen.getAllByTestId('comment-item');
        expect(commentItems).toHaveLength(2);
        expect(commentItems[0]).toHaveTextContent('Primeiro comentário');
        expect(commentItems[1]).toHaveTextContent('Segundo comentário');
    });
});
