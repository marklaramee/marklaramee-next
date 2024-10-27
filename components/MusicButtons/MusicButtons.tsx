
import React from "react";
import styles from './styles/MusicButtons.module.css'
import { MusicLinks } from "@/model/music";

interface ButtonProps {
    links: MusicLinks | null | undefined
}

const MusicButtons = ({links}: ButtonProps) => {
    if (!links) {
        return null;
    }
    return (
        <div className={styles.buttonsContainer}>  
            {links.facebook &&
                <a href={links.facebook} className={styles.musicButton} target='_blank'> 
                    <span className={styles.buttonImage}>  
                        <img src='/images/icons/facebook-1.png' alt='facebook' className={styles.fbLogo} /> 
                    </span> 
                    <span className={styles.buttonTitle}> Facebook </span> 
                </a>   
            } 
            {links.insta &&
                <a href={links.insta} className={styles.musicButton} target='_blank'> 
                    <span className={styles.buttonImage}>  
                        <img src='/images/icons/insta-1.jpg' alt='instagram' /> 
                    </span> 
                    <span className={styles.buttonTitle}> Instagram </span> 
                </a>   
            } 
            {links.tiktok &&
                <a href={links.insta} className={styles.musicButton} target='_blank'> 
                    <span className={styles.buttonImage}>  
                        <img src='/images/icons/tiktok2.webp' alt='tiktok' /> 
                    </span> 
                    <span className={styles.buttonTitle}> TikTok </span> 
                </a>   
            } 
            {links.spotify &&
                <a href={links.spotify} className={styles.musicButton} target='_blank'> 
                    <span className={styles.buttonImage}>  
                        <title>spotify</title>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M13.894 1.056c-4.584.4-8.563 2.873-10.909 6.783-1.036 1.725-1.645 3.554-1.909 5.723-.076.62-.064 2.37.024 3.042.416 3.297 1.825 6.147 4.151 8.404a13.923 13.923 0 0 0 8.463 3.902c1.024.092 2.625.032 3.634-.14 5.82-1 10.416-5.595 11.417-11.414.172-1.008.232-2.61.14-3.634-.372-4.026-2.458-7.672-5.764-10.069-1.874-1.36-4.04-2.213-6.405-2.521-.717-.092-2.182-.132-2.842-.076zm1.16 7.444c3.395.268 6.193.976 8.587 2.169 1.185.592 1.385.764 1.525 1.32.152.589-.136 1.185-.7 1.461-.193.096-.273.112-.565.112h-.34l-.56-.304c-2.21-1.196-4.7-1.873-7.986-2.165-.777-.068-3.363-.068-4.124 0-1.325.12-2.485.316-3.518.592-.837.228-1.25.172-1.65-.228A1.287 1.287 0 0 1 5.677 9.7c.252-.284.468-.376 1.349-.6 1.385-.352 2.898-.56 4.767-.656.496-.024 2.706.012 3.263.056zm-.664 4.802c2.97.252 5.82 1.1 8.05 2.405.484.28.677.48.765.789.16.544-.16 1.156-.693 1.332a1.48 1.48 0 0 1-.404.028c-.248-.012-.312-.04-.889-.36-1.265-.704-2.474-1.168-4.03-1.549-2.92-.716-6.242-.724-8.9-.02-.82.22-.844.225-1.056.197a1.045 1.045 0 0 1-.809-.549c-.1-.18-.116-.256-.116-.512 0-.26.016-.328.124-.52.18-.316.368-.444.88-.593 1.218-.356 2.699-.6 4.164-.688.68-.04 2.202-.02 2.914.04zm.344 4.582c2.218.237 4.155.845 5.98 1.873.637.36.805.577.777 1.013-.02.336-.164.552-.472.708-.34.176-.516.144-1.149-.216-3.15-1.78-6.93-2.197-11.484-1.257-.465.097-.689.125-.801.105-.44-.085-.697-.393-.697-.845 0-.356.149-.608.44-.76.385-.196 2.763-.58 4.224-.68.716-.049 2.482-.017 3.182.06z"></path>
                        </svg>  
                    </span> 
                    <span className={styles.buttonTitle}> Spotify </span> 
                </a>   
            }  
            {links.beatport &&
                <a href={links.beatport} className={styles.musicButton} target='_blank'> 
                    <span className={styles.buttonImage}>  
                        <title>beatport</title>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 1036 1200">
                            <path  d="M817.7,763.3c0,120-95.8,217-217,217c-120,0-215.8-94.6-215.8-217c0-57.6,21.8-108.5,56.4-146.7L294.6,763.3
                            l-77-77l165.5-163.7c22.4-22.4,33.9-51.5,33.9-83.6V233.6h108.5V439c0,63-22.4,116.4-66.1,160l-4.9,4.8
                            c38.2-35.2,90.3-56.4,146.1-56.4C723.8,547.5,817.7,645.1,817.7,763.3z M719.5,763.3c0-64.3-53.3-116.4-118.8-116.4
                            c-66.1,0-117.6,54.6-117.6,116.4c0,63.6,52.1,117.6,117.6,117.6C668.6,880.9,719.5,825.8,719.5,763.3z"/>
                        </svg>
                    </span> 
                    <span className={styles.buttonTitle}> Beatport </span> 
                </a>      
            }
            {links.bandcamp &&
                <a href={links.bandcamp} className={styles.musicButton} target='_blank'> 
                    <span className={styles.bandcamp}>  
                        <img src='/music/bc-logotype-light-32.png' alt='bandcamp'/>
                    </span> 
                    <span className={styles.buttonTitle}> Bandcamp </span> 
                </a>      
            }
            {links.apple &&
                <a href={links.apple} className={styles.musicButton} target='_blank'> 
                    <span className={styles.buttonImage}>  
                        <img src='/images/spacer.gif' alt='apple'/>
                    </span> 
                    <span className={styles.buttonTitle}> Apple Music </span> 
                </a>      
            }
            {links.amazon && 
                <a href={links.amazon} className={styles.musicButton} target='_blank'> 
                    <span className={styles.buttonImage}>  
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.617 26.617" pointerEvents="bounding-box">
                            <title>amazon</title>
                            <path d="M.148 19.79c-.1-.077-.148-.148-.148-.215 0-.043.015-.082.048-.115a.252.252 0 0 1 .197-.099.43.43 0 0 1 .215.068c1.847 1.047 3.881 1.866 6.109 2.457 2.226.592 4.533.887 6.916.887 1.516 0 3.059-.135 4.635-.405a28.068 28.068 0 0 0 4.715-1.244 3.82 3.82 0 0 1 .331-.115c.109-.035.228-.077.349-.131a.558.558 0 0 1 .331-.035c.109.022.188.07.233.148.03.056.051.117.063.182 0 .131-.063.236-.197.313-.179.129-.364.25-.555.353a9.904 9.904 0 0 0-.555.323c-1.422.766-2.983 1.34-4.688 1.72a22.69 22.69 0 0 1-4.959.57c-2.538 0-4.915-.413-7.122-1.236A19.889 19.889 0 0 1 .148 19.79zM15.62 7.506c0-.324-.003-.657-.016-1.002a1.599 1.599 0 0 0-.312-.917 1.488 1.488 0 0 0-.698-.551 2.39 2.39 0 0 0-.861-.167h-.214a2.941 2.941 0 0 0-1.35.458c-.403.263-.663.655-.785 1.177a.683.683 0 0 1-.452.518l-2.713-.344a.809.809 0 0 1-.316-.147c-.103-.076-.132-.202-.091-.376.155-.719.424-1.326.807-1.815.385-.491.84-.892 1.367-1.202a6.204 6.204 0 0 1 1.719-.687 11.608 11.608 0 0 1 1.868-.286h.576a9.54 9.54 0 0 1 2.222.286c.789.19 1.474.531 2.055 1.021.34.292.595.613.768.955.17.343.285.703.352 1.078.066.375.099.77.099 1.183v5.456c0 .635.11 1.123.328 1.468.218.346.464.673.73.983a.546.546 0 0 1 .128.343.382.382 0 0 1-.161.306c-.273.241-.625.522-1.058.843-.433.321-.794.602-1.082.843-.2.125-.443.136-.731.031-.455-.366-.77-.652-.949-.852l-.679-.787a7.731 7.731 0 0 1-1.325 1.033 5.52 5.52 0 0 1-1.328.575c-.604.125-1.279.189-2.02.189-1.173 0-2.156-.331-2.95-.99-.792-.66-1.188-1.649-1.188-2.968 0-1.089.272-1.999.818-2.729.546-.728 1.273-1.275 2.189-1.643.47-.2.97-.353 1.504-.458a21.085 21.085 0 0 1 1.667-.26c.382-.043.746-.077 1.095-.1.348-.022.679-.056.985-.1v-.365h.002zm0 2.518c-.361 0-.725.011-1.083.032a7.276 7.276 0 0 0-1.018.135 3.926 3.926 0 0 0-1.507.833c-.418.378-.628.934-.628 1.67 0 .587.154 1.061.464 1.417.31.356.734.534 1.274.534a.967.967 0 0 0 .23-.024.704.704 0 0 1 .167-.026c.697-.154 1.219-.549 1.573-1.184.319-.479.488-.94.503-1.385.018-.444.024-.928.024-1.451v-.551h.001zm9.125 13.31c-.115.109-.221.143-.316.099-.091-.044-.118-.132-.072-.263l.315-.758c.121-.309.23-.614.336-.916.106-.302.176-.576.206-.825.033-.247.006-.425-.082-.535-.134-.176-.431-.274-.892-.297h-.282c-.376 0-.751.016-1.125.05a2.74 2.74 0 0 1-.579.065 1.89 1.89 0 0 0-.513.067c-.13 0-.209-.04-.23-.116-.021-.077.031-.161.164-.249.343-.22.728-.4 1.158-.544a8.919 8.919 0 0 1 1.837-.214c.151 0 .306.006.458.017.367.023.667.061.904.115.236.057.394.117.479.182.021.044.045.102.069.173s.037.162.037.271v.134c0 .218-.045.488-.133.807-.085.317-.2.639-.34.963-.139.326-.33.647-.566.966a3.705 3.705 0 0 1-.833.808z"></path>
                        </svg>  
                    </span> 
                    <span className={styles.buttonTitle}> Amazon </span> 
                </a>   
            }  
            {links.pandora && 
                <a href={links.pandora}  className={styles.musicButton} target='_blank'> 
                    <span className={styles.buttonImage}>  
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" className={styles.pandora}>
                        <title>pandora</title>
                            <path d="M8.229 245.472V.229h116.444c2.538.218 5.078.417 7.614.656 11.519 1.083 22.696 3.611 33.395 8.07 12.847 5.354 23.982 13.074 32.699 24.043 10.201 12.838 15.236 27.691 16.88 43.825 1.107 10.866.756 21.694-1.152 32.456-2.185 12.32-6.396 23.873-13.231 34.404-10.335 15.924-24.744 26.797-42.195 33.839-15.846 6.393-32.439 9.063-49.418 9.59-7.465.231-14.94.133-22.411.184-.444.003-.889 0-1.459 0v1.607c0 14.981.007 29.963-.003 44.943-.004 6.927-4.721 11.624-11.632 11.625l-65.531.001z"></path><path fillRule="evenodd" clipRule="evenodd" d="M237.229 18.759h-2.307V4.217a26.68 26.68 0 0 0-.265-.08c-.136.266-.291.524-.405.799-1.793 4.321-3.573 8.646-5.383 12.96-.143.341-.476.602-.721.901-.245-.299-.58-.56-.724-.901-1.937-4.627-3.847-9.267-5.954-13.889v14.744h-2.331c-.027-.269-.068-.487-.068-.704-.004-5.715-.004-11.43 0-17.144 0-.225.055-.45.085-.674h3.66c.044.182.066.373.135.545 1.611 4.019 3.226 8.037 4.846 12.052.09.223.231.424.412.748L233.568.23h3.66l.001 18.529z"></path><path fillRule="evenodd" clipRule="evenodd" d="m233.568.229-5.359 13.344c-.181-.323-.322-.525-.412-.748-1.62-4.015-3.234-8.033-4.846-12.052-.068-.172-.091-.363-.135-.545l10.752.001zM215.953.229v2.204h-5.196v16.301h-2.364V2.465h-5.251V.229h12.811z"></path>
                        </svg>  
                    </span> 
                    <span className={styles.buttonTitle}> Pandora </span> 
                </a>    
            } 
            {links.youtube && 
                <a href={links.youtube}  className={styles.musicButton} target='_blank'> 
                    <span className={styles.buttonImage}>  
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" pointerEvents="bounding-box">
                            <title>you tube</title>
                            <path d="M26 0C11.64 0 0 11.64 0 26s11.64 26 26 26 26-11.64 26-26S40.36 0 26 0zm-3.125 10.156.844.031v.126c-.016.111-.608 2.07-1.219 4.062-.067.22-.234.776-.375 1.25-.14.474-.307 1.036-.375 1.25l-.125.406v2.438c0 2.28-.025 2.418-.094 2.437-.153.042-1.754.013-1.781-.031-.036-.058-.037-3.51 0-4 .047-.628-.05-1.113-.5-2.375-.146-.41-.418-1.19-.594-1.75-1.273-4.05-1.215-3.811-1.093-3.813.838-.007 1.894-.011 1.906 0 .008.009.268.987.593 2.188.326 1.2.588 2.198.594 2.219.007.02.211-.656.438-1.532.475-1.835.74-2.865.75-2.875.021-.019.259-.035 1.031-.03zm3.375 2.938c.424.025.86.153 1.25.406.498.322.776.776.938 1.469.071.306.093.54.093 2.687 0 2.61-.014 2.779-.281 3.344-.257.545-.83 1.02-1.437 1.188-.268.074-.74.121-.97.093-.76-.092-1.475-.545-1.812-1.156-.343-.623-.364-.944-.343-3.688.015-2.125.009-2.258.093-2.562.201-.725.615-1.233 1.219-1.531a2.422 2.422 0 0 1 1.25-.25zm8.219.094V22.125l-.125.031c-.14.029-1.428.03-1.532 0-.063-.017-.062-.087-.062-.437v-.407l-.25.25c-.556.542-1.163.793-1.719.72-.422-.057-.643-.229-.812-.563-.213-.42-.219-.41-.219-4.594v-3.906h1.688l.03 3.593c.02 3.911.017 3.817.25 3.875.216.054.454-.041.75-.343l.282-.313v-3.406l.031-3.406h.844l.844-.032zM26 14.655c-.246.035-.447.21-.531.5-.087.298-.088 4.733 0 5.031.065.224.28.467.437.5a.79.79 0 0 0 .594-.125c.292-.222.296-.235.313-2.75.012-1.952-.004-2.264-.063-2.53-.08-.36-.195-.552-.469-.626a.75.75 0 0 0-.281 0zm-.719 8.656c1.535-.008 3.025.003 4.313.032 2.974.066 6.177.215 7.031.312 1.105.126 1.9.696 2.438 1.781.405.82.523 1.473.687 3.438.13 1.557.148 2.516.125 4.312-.028 2.15-.14 4.03-.344 5.094-.216 1.124-.746 2.107-1.406 2.625-.51.401-1.053.577-1.906.625-.254.015-.58.02-.719.032-.493.038-3.116.146-4.562.187-2.151.06-5.923.068-7.97.031-.98-.017-2.123-.015-2.562-.031-2.946-.106-4.97-.23-5.375-.313-.576-.116-1.22-.51-1.594-.968-.598-.735-.938-1.627-1.093-3-.36-3.193-.343-6.92.031-10 .164-1.35.567-2.32 1.25-3 .39-.388.75-.591 1.25-.719.811-.207 5.802-.41 10.406-.437zm-10.593 3v1.594h1.875l.03 5.063c.006 2.783.02 5.095.032 5.125.016.041.202.04.844.031h.812l.032-5.094.03-5.125h1.908l-.032-.812v-.781H14.688zm12.03 0V38.157h1.5v-.406c0-.264.032-.406.063-.406.026 0 .193.14.375.312.588.553 1.084.719 1.719.532.243-.072.554-.391.687-.688.256-.57.25-.582.25-3.781 0-2.627.004-2.936-.062-3.219-.211-.909-.696-1.308-1.469-1.25-.433.033-.779.2-1.187.594-.178.171-.327.312-.344.312-.017 0-.031-.875-.031-1.937v-1.907h-1.5zm8.407 2.938a2.155 2.155 0 0 0-.812.125c-.815.297-1.306.83-1.5 1.656-.07.292-.063.546-.063 2.688 0 2.627-.019 2.743.25 3.281.479.958 1.692 1.461 2.781 1.156.81-.226 1.384-.783 1.594-1.562.036-.133.05-.515.063-.844l.03-.594h-1.562v.532c-.022.61-.09.836-.312 1.03-.237.208-.687.222-.969.032-.336-.226-.392-.63-.375-1.875V34h1.625l1.594-.031-.031-1.313c-.025-1.463-.035-1.668-.282-2.187-.35-.74-1.188-1.199-2.031-1.219zm-14.5.125v3.781c0 4.14-.013 4.226.219 4.625.253.436.874.578 1.5.344.302-.113.638-.353.937-.656.138-.14.283-.25.313-.25.04 0 .062.12.062.468v.47h1.5v-8.782h-1.5v6.75l-.344.344c-.258.257-.372.331-.53.375-.271.074-.42.002-.532-.188-.084-.143-.083-.2-.094-3.718l-.031-3.563h-1.5zm14.469 1.219c.337 0 .543.145.687.437.092.186.113.254.125.938v.75h-.812c-.71 0-.822-.006-.844-.063-.039-.101.011-1.266.062-1.437.122-.403.376-.625.782-.625zm-5.969.125a.544.544 0 0 1 .469.312c.076.154.085.277.093 2.625.01 2.253.004 2.498-.062 2.688a.58.58 0 0 1-.219.312c-.252.169-.604.129-.937-.125l-.156-.125V31.062l.156-.125c.225-.171.452-.234.656-.218z" ></path>
                        </svg>  
                    </span> 
                    <span className={styles.buttonTitle}>YouTube </span> 
                </a> 
            }  
            {links.deezer &&   
                <a href={links.deezer} className={styles.musicButton} target='_blank'> 
                    <span className={styles.buttonImage}>  
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.848 97.848"  pointerEvents="bounding-box">
                            <title>deezer</title>
                            <path d="M0 70.818h17.838v5.406H0zM0 63.791h17.838v5.408H0zM0 56.764h17.838v5.408H0zM0 49.736h17.838v5.405H0zM0 42.709h17.838v5.404H0zM20.001 70.818h17.84v5.406h-17.84zM20.001 63.791h17.84v5.408h-17.84zM20.001 56.764h17.84v5.408h-17.84zM40.004 70.818h17.84v5.406h-17.84zM40.004 63.791h17.84v5.408h-17.84zM40.004 56.764h17.84v5.408h-17.84zM40.004 49.736h17.84v5.405h-17.84zM40.004 42.709h17.84v5.404h-17.84zM40.004 35.68h17.84v5.406h-17.84zM40.004 28.653h17.84v5.407h-17.84zM60.005 70.818h17.841v5.406H60.005zM60.005 63.791h17.841v5.408H60.005zM60.005 56.764h17.841v5.408H60.005zM60.005 49.736h17.841v5.405H60.005zM60.005 42.709h17.841v5.404H60.005zM80.008 70.818h17.84v5.406h-17.84zM80.008 63.791h17.84v5.408h-17.84zM80.008 56.762h17.84v5.406h-17.84zM80.008 49.736h17.84v5.406h-17.84zM80.008 42.707h17.84v5.407h-17.84zM80.008 35.681h17.84v5.404h-17.84zM80.008 28.652h17.84v5.404h-17.84zM80.008 21.623h17.84v5.406h-17.84z"></path>
                        </svg>  
                    </span> 
                    <span className={styles.buttonTitle}>Deezer</span> 
                </a>  
            } 
            {links.soundcloud &&   
                <a href={links.soundcloud} className={styles.musicButton} target='_blank'> 
                    <span className={styles.buttonImage}>  
                        <svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 291.319 291.319">
                            <title>soundcloud</title>
                            <g>
                                <path d="M72.83,218.485h18.207V103.832c-6.828,1.93-12.982,5.435-18.207,10.041
                                    C72.83,113.874,72.83,218.485,72.83,218.485z M36.415,140.921v77.436l1.174,0.127h17.033v-77.682H37.589
                                    C37.589,140.803,36.415,140.921,36.415,140.921z M0,179.63c0,14.102,7.338,26.328,18.207,33.147V146.52
                                    C7.338,153.329,0,165.556,0,179.63z M109.245,218.485h18.207v-109.6c-5.444-3.396-11.607-5.635-18.207-6.5V218.485z
                                    M253.73,140.803h-10.242c0.519-3.168,0.847-6.382,0.847-9.705c0-32.182-25.245-58.264-56.388-58.264
                                    c-16.896,0-31.954,7.775-42.287,19.955v125.695h108.07c20.747,0,37.589-17.388,37.589-38.855
                                    C291.319,158.182,274.477,140.803,253.73,140.803z"/>
                            </g>
                        </svg>
                    </span> 
                    <span className={styles.buttonTitle}>Soundcloud</span> 
                </a>  
            }       
        </div>
    );
}

export default MusicButtons;



/* 
saving itunes button until I'm sure I don;'t need it 20240331
<a href="/preview/g1Df19HaF7g1e3OhdM0n0g%3D%3D" className={styles.musicButton} target='_blank'> 
                <span className={styles.buttonImage}>  
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.188 28.195" pointerEvents="bounding-box">
                        <path d="M28.187 7.195c-.001-.867-.076-1.728-.282-2.574-.372-1.536-1.247-2.713-2.561-3.573A5.869 5.869 0 0 0 23.14.193a12.446 12.446 0 0 0-1.838-.177c-.048-.002-.098-.009-.146-.014H7.032l-.534.03c-.878.05-1.75.146-2.575.472C2.351 1.126 1.219 2.21.555 3.768.33 4.296.212 4.856.129 5.423c-.067.46-.105.922-.118 1.387-.001.036-.009.072-.012.108v14.359l.03.498c.059.957.181 1.908.584 2.787.764 1.668 2.041 2.764 3.799 3.291.495.149 1.005.22 1.519.268a20.62 20.62 0 0 0 1.957.072c4.319 0 8.638 0 12.957-.002.617 0 1.231-.039 1.844-.116.967-.124 1.876-.412 2.697-.952a5.919 5.919 0 0 0 2.208-2.594c.219-.495.344-1.021.434-1.555.134-.793.163-1.595.162-2.397-.002-4.461.001-8.921-.003-13.382m-7.545 4.687c0 2.237.001 4.474-.001 6.71 0 .49-.067.971-.285 1.417-.339.694-.894 1.13-1.63 1.339-.41.117-.829.184-1.256.203a2.193 2.193 0 0 1-2.284-1.804 2.208 2.208 0 0 1 1.221-2.374c.38-.188.786-.293 1.196-.381.444-.096.89-.18 1.332-.282.322-.074.537-.271.6-.606.015-.074.021-.151.021-.227.001-2.132.001-4.263-.001-6.394a.88.88 0 0 0-.03-.217c-.046-.177-.175-.285-.357-.275a4.05 4.05 0 0 0-.558.078c-.893.176-1.785.357-2.677.537l-2.734.552-1.614.326c-.019.004-.038.01-.056.015-.325.09-.443.239-.458.575-.002.051-.001.102-.001.154-.001 3.056 0 6.113-.002 9.168 0 .494-.055.982-.253 1.441-.327.754-.905 1.223-1.685 1.45a5.202 5.202 0 0 1-1.263.202c-1.126.042-2.061-.706-2.254-1.814-.167-.955.27-1.98 1.354-2.439.419-.176.859-.273 1.301-.365.337-.071.675-.135 1.011-.207.449-.098.684-.38.703-.839.002-.06.001-.117.001-.177 0-3.477 0-6.955.002-10.432 0-.145.015-.294.049-.435.082-.335.321-.526.641-.609.3-.078.605-.132.909-.194l2.583-.52 2.669-.539c.786-.159 1.572-.32 2.36-.475.258-.051.52-.103.78-.124.364-.029.614.2.651.566.009.087.014.175.014.263.002 2.245.002 4.489.001 6.733z"></path>
                        </svg>  
                </span> 
                <span className={styles.buttonTitle}> iTunes </span> 
            </a>      */
