/**
 * Created by liyongleihf2006 on 2018/01/26
 * 以首字母分组传入的文字数组 
 * @param {*} words 文字数组
 */
function pinyin_firstLetter_group(words){
    var i = 0;
    var mark = "         !";
    var transform_mark = mark.replace("!"," ");
    var letters = "abcdefghjklmnopqrstwxyz*".split('');
    var current_letter = letters[letters.length-1];
    var zhs = "阿八嚓哒妸发旮哈讥咔垃妈拏噢妑七呥扨它穵夕丫帀咗".split('');
    var zh_letter_map = zhs.reduce(function(result,zh,idx){
        result[zh]=letters[idx];
        return result;
    },{});
    var letter_zh_map = letters.reduce(function(result,letter,idx){
        result[letter]=zhs[idx];
        return result;
    },{});
    var result = letters.reduce(function(result,letter){
        result[letter]=[];
        return result;
    },{});
    var data  = words.map(function(word){
        var first_letter = word.slice(0,1);
        var zh = letter_zh_map[first_letter.toLowerCase()];
        if(zh){
            return zh+transform_mark+word;
        }
        return word;
    }).map(function(word){
        return word+mark;
    });
    zhs.concat(data).sort(function(a,b){
        return a.localeCompare(b,"zh");
    }).forEach(function(current,idx){
        if(current===zhs[i]){
            i++;
            current_letter=zh_letter_map[current];
        }else{
            result[current_letter].push(current);
        }
        return result;
    });
    Object.keys(result).forEach(function(key){
        result[key]=result[key].map(function(word){
            var prefix_reg = new RegExp("^"+"["+zhs.join("")+"]"+transform_mark);
            var suffix_reg = new RegExp(mark+"$");
            return word.replace(prefix_reg,"").replace(suffix_reg,"");
        });
    });
    return result;
}