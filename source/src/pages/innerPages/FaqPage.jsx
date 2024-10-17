import FaqV1 from '@/components/faq/FaqV1';
import LayoutV5 from '@/components/layouts/LayoutV5';
import React from 'react';

const FaqPage = () => {
    return (
        <>
            <LayoutV5>
                <FaqV1 />
            </LayoutV5>
        </>
    );
};

export default FaqPage;