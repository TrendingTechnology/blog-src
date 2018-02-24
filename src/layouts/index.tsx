import * as React from 'react'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'

import config from 'site-config'

interface DefaultLayoutProps {
    children: any
}

export default ({ children }: DefaultLayoutProps) => {
    const { title, description, author, keywords } = config

    return (
        <>
            <Helmet>
                {/* 사이트 기본 메타 정보는 대부분의 페이지에서 Override 되며, 생략된 경우만 사용 */}
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='author' content={author} />
                <meta name='keywords' content={keywords.join(', ')} />
            </Helmet>

            {children()}
        </>
    )
}

// tslint:disable-next-line:no-unused-expression
injectGlobal`
    @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

    body {
        font-family: 'Noto Sans KR';
        margin: 0;
    }
`
