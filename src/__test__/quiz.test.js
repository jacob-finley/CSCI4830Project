import { render, screen, cleanup, renderer } from '@testing-library/react';
import { shallow } from 'enzyme';
import Quiz from '../quiz';


afterEach(() => {
    cleanup();
})

test('should render quiz', () => {
    render(<Quiz/>);
    const quizScreen = screen.getByTestId('quiz-screen');
    expect(quizScreen).toBeInTheDocument();
    expect(quizScreen).toHaveTextContent('Question');
})

test('it calls start logout on button click', () => {
    const mockLogout = jest.fn();
    const wrapper = shallow(<Quiz startLogout={mockLogout}/>);
    wrapper.find('English Research Paper').at(0).simulate('click');
    expect(mockLogout).toHaveBeenCalled();
});