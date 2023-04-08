import React from 'react';
import { useState } from 'react';

export default function ({todo}) {
    return (
        <div className='flex'>
            <input type="checkbox" />
            <p>{todo}</p>
            <button>수정</button>
            <button>삭제</button>
        </div>
    );
}

