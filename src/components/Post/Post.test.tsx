import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Post from './index';  

describe('Post Component', () => {
    it('deve renderizar a imagem e o texto do post corretamente', () => {
        render(
            <Post imageUrl="https://example.com/image.jpg">Texto do Post</Post>
        );

        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');

        const postText = screen.getByText('Texto do Post');
        expect(postText).toBeInTheDocument();
    });

    it('deve renderizar o componente PostComments corretamente', () => {
        render(
            <Post imageUrl="https://example.com/image.jpg">Texto do Post</Post>
        );

        const commentsSection = screen.getByTestId('comments-list');
        expect(commentsSection).toBeInTheDocument();
    });
});
