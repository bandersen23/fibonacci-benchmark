/* Generated by the Nim Compiler v1.2.4 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;
var NTI143 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI160043 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI6008 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI6286 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI112 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI114 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI6281 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI6217 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI6219 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI6233 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI6237 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NNI6237 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI6237.node = NNI6237;
var NNI6233 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI6233.node = NNI6233;
var NNI6219 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI6219.node = NNI6219;
NTI6281.base = NTI6217;
NTI6286.base = NTI6217;
var NNI6217 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI6281, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI114, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI112, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI112, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI6286, name: "up", sons: null}]};
NTI6217.node = NNI6217;
var NNI6008 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI6008.node = NNI6008;
NTI6217.base = NTI6008;
NTI6219.base = NTI6217;
NTI6233.base = NTI6219;
NTI6237.base = NTI6233;
var NNI160043 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI114, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI143, name: "Field1", sons: null}]};
NTI160043.node = NNI160043;
function toJSStr(s_225096) {
                    var Tmp5;
            var Tmp7;

  var result_225097 = null;

    var res_225170 = new_seq_225128((s_225096 != null ? s_225096.length : 0));
    var i_225172 = 0;
    var j_225174 = 0;
    L1: do {
        L2: while (true) {
        if (!(i_225172 < (s_225096 != null ? s_225096.length : 0))) break L2;
          var c_225175 = s_225096[i_225172];
          if ((c_225175 < 128)) {
          res_225170[j_225174] = String.fromCharCode(c_225175);
          i_225172 += 1;
          }
          else {
            var helper_225198 = new_seq_225128(0);
            L3: do {
                L4: while (true) {
                if (!true) break L4;
                  var code_225199 = c_225175.toString(16);
                  if (((code_225199 != null ? code_225199.length : 0) == 1)) {
                  if (helper_225198 != null) { helper_225198.push("%0"); } else { helper_225198 = ["%0"]; };
                  }
                  else {
                  if (helper_225198 != null) { helper_225198.push("%"); } else { helper_225198 = ["%"]; };
                  }
                  
                  if (helper_225198 != null) { helper_225198.push(code_225199); } else { helper_225198 = [code_225199]; };
                  i_225172 += 1;
                    if (((s_225096 != null ? s_225096.length : 0) <= i_225172)) Tmp5 = true; else {                      Tmp5 = (s_225096[i_225172] < 128);                    }                  if (Tmp5) {
                  break L3;
                  }
                  
                  c_225175 = s_225096[i_225172];
                }
            } while(false);
++excHandler;
            Tmp7 = framePtr;
            try {
            res_225170[j_225174] = decodeURIComponent(helper_225198.join(""));
--excHandler;
} catch (EXC) {
 var prevJSError = lastJSError;
 lastJSError = EXC;
 --excHandler;
            framePtr = Tmp7;
            res_225170[j_225174] = helper_225198.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Tmp7;
            }
          }
          
          j_225174 += 1;
        }
    } while(false);
    if (res_225170 === null) res_225170 = [];
               if (res_225170.length < j_225174) { for (var i=res_225170.length;i<j_225174;++i) res_225170.push(null); }
               else { res_225170.length = j_225174; };
    result_225097 = res_225170.join("");

  return result_225097;

}
function rawEcho() {
          var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    

  
}
function cstrToNimstr(c_225079) {
      var ln = c_225079.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_225079.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_225079.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}
function makeNimstrLit(c_225062) {
      var ln = c_225062.length;
  var result = new Array(ln);
  for (var i = 0; i < ln; ++i) {
    result[i] = c_225062.charCodeAt(i);
  }
  return result;
  

  
}
function arrayConstr(len_250067, value_250068, typ_250069) {
        var result = new Array(len_250067);
    for (var i = 0; i < len_250067; ++i) result[i] = nimCopy(null, value_250068, typ_250069);
    return result;
  

  
}
function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);
function nimCopy(dest_240023, src_240024, ti_240025) {
  var result_245219 = null;

    switch (ti_240025.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(is_fat_pointer_235401(ti_240025))) {
      result_245219 = src_240024;
      }
      else {
        result_245219 = [src_240024[0], src_240024[1]];
      }
      
      break;
    case 19:
            if (dest_240023 === null || dest_240023 === undefined) {
        dest_240023 = {};
      }
      else {
        for (var key in dest_240023) { delete dest_240023[key]; }
      }
      for (var key in src_240024) { dest_240023[key] = src_240024[key]; }
      result_245219 = dest_240023;
    
      break;
    case 18:
    case 17:
      if (!((ti_240025.base == null))) {
      result_245219 = nimCopy(dest_240023, src_240024, ti_240025.base);
      }
      else {
      if ((ti_240025.kind == 17)) {
      result_245219 = (dest_240023 === null || dest_240023 === undefined) ? {m_type: ti_240025} : dest_240023;
      }
      else {
        result_245219 = (dest_240023 === null || dest_240023 === undefined) ? {} : dest_240023;
      }
      }
      nimCopyAux(result_245219, src_240024, ti_240025.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_240024 === null) {
        result_245219 = null;
      }
      else {
        if (dest_240023 === null || dest_240023 === undefined) {
          dest_240023 = new Array(src_240024.length);
        }
        else {
          dest_240023.length = src_240024.length;
        }
        result_245219 = dest_240023;
        for (var i = 0; i < src_240024.length; ++i) {
          result_245219[i] = nimCopy(result_245219[i], src_240024[i], ti_240025.base);
        }
      }
    
      break;
    case 28:
            if (src_240024 !== null) {
        result_245219 = src_240024.slice(0);
      }
    
      break;
    default: 
      result_245219 = src_240024;
      break;
    }

  return result_245219;

}
function raiseException(e_190218, ename_190219) {
    e_190218.name = ename_190219;
    if ((excHandler == 0)) {
    unhandledException(e_190218);
    }
    
    e_190218.trace = nimCopy(null, raw_write_stack_trace_180059(), NTI112);
    throw e_190218;

  
}
function addInt(a_230403, b_230404) {
        var result = a_230403 + b_230404;
    if (result > 2147483647 || result < -2147483648) raiseOverflow();
    return result;
  

  
}
function subInt(a_230421, b_230422) {
        var result = a_230421 - b_230422;
    if (result > 2147483647 || result < -2147483648) raiseOverflow();
    return result;
  

  
}
var nim_program_result = 0;
var global_raise_hook_142018 = [null];
var local_raise_hook_142023 = [null];
var out_of_mem_hook_142026 = [null];
var unhandled_exception_hook_142031 = [null];
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

function new_seq_225128(len_225131) {
  var result_225133 = null;

  var F={procname:"newSeq.newSeq",prev:framePtr,filename:"system.nim",line:0};
  framePtr = F;
    F.line = 643;
    result_225133 = new Array(len_225131); for (var i=0;i<len_225131;++i) {result_225133[i]=null;}  framePtr = F.prev;

  return result_225133;

}
function add_142042(x_142045, x_142045_Idx, y_142046) {
          if (x_142045[x_142045_Idx] === null) { x_142045[x_142045_Idx] = []; }
      var off = x_142045[x_142045_Idx].length;
      x_142045[x_142045_Idx].length += y_142046.length;
      for (var i = 0; i < y_142046.length; ++i) {
        x_142045[x_142045_Idx][off+i] = y_142046.charCodeAt(i);
      }
    

  
}
function is_fat_pointer_235401(ti_235403) {
  var result_235404 = false;

  BeforeRet: do {
    result_235404 = !((ConstSet1[ti_235403.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_235404;

}
function nimCopyAux(dest_240028, src_240029, n_240031) {
    switch (n_240031.kind) {
    case 0:
      break;
    case 1:
            dest_240028[n_240031.offset] = nimCopy(dest_240028[n_240031.offset], src_240029[n_240031.offset], n_240031.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_240031.sons.length; i++) {
      nimCopyAux(dest_240028, src_240029, n_240031.sons[i]);
    }
    
      break;
    case 3:
            dest_240028[n_240031.offset] = nimCopy(dest_240028[n_240031.offset], src_240029[n_240031.offset], n_240031.typ);
      for (var i = 0; i < n_240031.sons.length; ++i) {
        nimCopyAux(dest_240028, src_240029, n_240031.sons[i][1]);
      }
    
      break;
    }

  
}
function aux_write_stack_trace_160038(f_160040) {
          var Tmp3;

  var result_160041 = [null];

    var it_160049 = f_160040;
    var i_160051 = 0;
    var total_160053 = 0;
    var temp_frames_160060 = arrayConstr(64, {Field0: null, Field1: 0}, NTI160043);
    L1: do {
        L2: while (true) {
          if (!!((it_160049 == null))) Tmp3 = false; else {            Tmp3 = (i_160051 <= 63);          }        if (!Tmp3) break L2;
          temp_frames_160060[i_160051].Field0 = it_160049.procname;
          temp_frames_160060[i_160051].Field1 = it_160049.line;
          i_160051 += 1;
          total_160053 += 1;
          it_160049 = it_160049.prev;
        }
    } while(false);
    L4: do {
        L5: while (true) {
        if (!!((it_160049 == null))) break L5;
          total_160053 += 1;
          it_160049 = it_160049.prev;
        }
    } while(false);
    result_160041[0] = nimCopy(null, [], NTI112);
    if (!((total_160053 == i_160051))) {
    if (result_160041[0] != null) { result_160041[0] = (result_160041[0]).concat(makeNimstrLit("(")); } else { result_160041[0] = makeNimstrLit("("); };
    if (result_160041[0] != null) { result_160041[0] = (result_160041[0]).concat(cstrToNimstr(((total_160053 - i_160051))+"")); } else { result_160041[0] = cstrToNimstr(((total_160053 - i_160051))+"").slice(); };
    if (result_160041[0] != null) { result_160041[0] = (result_160041[0]).concat(makeNimstrLit(" calls omitted) ...\x0A")); } else { result_160041[0] = makeNimstrLit(" calls omitted) ...\x0A"); };
    }
    
    L6: do {
      var j_175236 = 0;
      var colontmp__622042 = 0;
      colontmp__622042 = (i_160051 - 1);
      var res_622047 = colontmp__622042;
      L7: do {
          L8: while (true) {
          if (!(0 <= res_622047)) break L8;
            j_175236 = res_622047;
            add_142042(result_160041, 0, temp_frames_160060[j_175236].Field0);
            if ((0 < temp_frames_160060[j_175236].Field1)) {
            if (result_160041[0] != null) { result_160041[0] = (result_160041[0]).concat(makeNimstrLit(", line: ")); } else { result_160041[0] = makeNimstrLit(", line: "); };
            if (result_160041[0] != null) { result_160041[0] = (result_160041[0]).concat(cstrToNimstr((temp_frames_160060[j_175236].Field1)+"")); } else { result_160041[0] = cstrToNimstr((temp_frames_160060[j_175236].Field1)+"").slice(); };
            }
            
            if (result_160041[0] != null) { result_160041[0] = (result_160041[0]).concat(makeNimstrLit("\x0A")); } else { result_160041[0] = makeNimstrLit("\x0A"); };
            res_622047 -= 1;
          }
      } while(false);
    } while(false);

  return result_160041[0];

}
function raw_write_stack_trace_180059() {
  var result_180061 = null;

    if (!((framePtr == null))) {
    result_180061 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A") || []).concat(aux_write_stack_trace_160038(framePtr) || []), NTI112);
    }
    else {
      result_180061 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI112);
    }
    

  return result_180061;

}
function unhandledException(e_185059) {
    var buf_185060 = [[]];
    if (!(((e_185059.message != null ? e_185059.message.length : 0) == 0))) {
    if (buf_185060[0] != null) { buf_185060[0] = (buf_185060[0]).concat(makeNimstrLit("Error: unhandled exception: ")); } else { buf_185060[0] = makeNimstrLit("Error: unhandled exception: "); };
    if (buf_185060[0] != null) { buf_185060[0] = (buf_185060[0]).concat(e_185059.message); } else { buf_185060[0] = e_185059.message.slice(); };
    }
    else {
    if (buf_185060[0] != null) { buf_185060[0] = (buf_185060[0]).concat(makeNimstrLit("Error: unhandled exception")); } else { buf_185060[0] = makeNimstrLit("Error: unhandled exception"); };
    }
    
    if (buf_185060[0] != null) { buf_185060[0] = (buf_185060[0]).concat(makeNimstrLit(" [")); } else { buf_185060[0] = makeNimstrLit(" ["); };
    add_142042(buf_185060, 0, e_185059.name);
    if (buf_185060[0] != null) { buf_185060[0] = (buf_185060[0]).concat(makeNimstrLit("]\x0A")); } else { buf_185060[0] = makeNimstrLit("]\x0A"); };
    if (buf_185060[0] != null) { buf_185060[0] = (buf_185060[0]).concat(raw_write_stack_trace_180059()); } else { buf_185060[0] = raw_write_stack_trace_180059().slice(); };
    var cbuf_190201 = toJSStr(buf_185060[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_190201);
  }
  else {
    throw cbuf_190201;
  }
  

  
}
function raiseOverflow() {
    raiseException({message: makeNimstrLit("over- or underflow"), parent: null, m_type: NTI6237, name: null, trace: null, up: null}, "OverflowError");

  
}
function fibonacci_622003(n_622005) {
  var result_622006 = 0;

  var F={procname:"fibonacci.fibonacci",prev:framePtr,filename:"fibonacci.nim",line:0};
  framePtr = F;
  BeforeRet: do {
    if ((n_622005 <= 1)) {
    F.line = 3;
    result_622006 = n_622005;
    break BeforeRet;
    }
    
    F.line = 4;
    result_622006 = addInt(fibonacci_622003(subInt(n_622005, 1)), fibonacci_622003(subInt(n_622005, 2)));
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_622006;

}
rawEcho(cstrToNimstr((fibonacci_622003(40))+""));
