import React, { Component } from 'react';
import './ArticleList.css'

class ArticleList extends Component {
    render() {
        return (
            <div id="article-list">
                <table width="70%" cellSpacing="0" align="center" border-top="1px solid #444444" border-collapse="collapse">
                    {/* @thead : article information header */}
                    <thead>
                        <th scope="col"><span>제목</span></th>
                        <th scope="col"><span>작성자</span></th>
                        <th scope="col"><span>날짜</span></th>
                    </thead>

                    {/* @tbody : list of articles */}
                    {/* TODO : onClick Event : switching client page when article is selected */}
                    <tbody>
                        <tr>
                            <td class="title">퇴근하고싶어용</td>
                            <td class="writer" width="20%">박민</td>
                            <td class="write-date" width="20%">2020-03-16</td>
                        </tr>

                        <tr>
                            <td class="title">아르고스 너무 조아용 홍홍</td>
                            <td class="writer" width="20%">김도희</td>
                            <td class="write-date" width="20%">2020-03-16</td>
                        </tr>

                        <tr>
                            <td class="title">저두용 홍홍</td>
                            <td class="writer" width="20%">서연주</td>
                            <td class="write-date" width="20%">2020-03-16</td>
                        </tr>

                        <tr>
                            <td class="title">선배님 밥사주세용 홍홍</td>
                            <td class="writer" width="20%">고태완</td>
                            <td class="write-date" width="20%">2020-03-16</td>
                        </tr>

                        <tr>
                            <td class="title">쓸 글이 없어용</td>
                            <td class="writer" width="20%">박민</td>
                            <td class="write-date" width="20%">2020-03-16</td>
                        </tr>

                        <tr>
                            <td class="title">리액트 너무 재밌어용</td>
                            <td class="writer" width="20%">김도희</td>
                            <td class="write-date" width="20%">2020-03-16</td>
                        </tr>

                        <tr>
                            <td class="title">깃허브도 너무 재밌어용</td>
                            <td class="writer" width="20%">서연주</td>
                            <td class="write-date" width="20%">2020-03-16</td>
                        </tr>

                        <tr>
                            <td class="title">빨리 merge나 하셈용 ㅎㅎ</td>
                            <td class="writer" width="20%">고태완</td>
                            <td class="write-date" width="20%">2020-03-16</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default ArticleList