import styled from 'styled-components';

export const RequestDetails = styled.div`
    display: flex;
    margin-bottom: 18px;
`

export const Section = styled.div`
    display: grid;
    padding-right: 20px;
    padding-left: 10px;
    border-left: 1px solid #767676;
`

export const LightHead = styled.span`
    font-size: 12px;
    color: #767676;
`

export const BlackHead = styled.span`
    font-size: 12px;
    color: rgb(24, 17, 17);
`

export const FullDetails = styled.div`
    font-size: 12px;
    position: absolute;
    padding-left: 95%;
    float: right;
    top: 120px;

    &:after {
        content: "^";
        display:inline-block;
    }
`

export const FullDetailsLink = styled.a`
    color: black
`