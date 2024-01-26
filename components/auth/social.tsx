'use client';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '../ui/button';

const Social = () => {
    return (
        <div className="flex items w-full gap-x-2">
            <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
                <FcGoogle />
            </Button>
            <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
                <FaGithub />
            </Button>
        </div>
    );
};

export default Social;
