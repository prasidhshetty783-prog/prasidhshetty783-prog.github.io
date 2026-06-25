# Downloads every portfolio image from Framer's CDN into .\assets\images
# Run in PowerShell:  ./download-images.ps1
$ErrorActionPreference = "Continue"
$out = Join-Path $PSScriptRoot "assets\images"
New-Item -ItemType Directory -Force -Path $out | Out-Null
$base = "https://framerusercontent.com/images/"
$files = @(
  # Homepage
  "dVeHFJa9e56pfi5yclxB2OnnPMI.jpg","6tdlCWu5rLJCDBCgVURhTuVFrA4.jpg","0c1XdZhzLxm8AiNm9qjDbvF7wtY.jpg",
  "2JhKWyJ2SElL3Hi5QCzx2IdPQHU.jpg","doNka5XIGk0l4mioRC9JH8uCSns.jpg","iH3PJMbKiL3fDyZdsHeYLwO5IM.jpg",
  "37sPZxfhImzHQvinJACsKNgtY0k.jpg","tnDRr4iNDn9OqNyZVktgQbF4g0.jpg",
  # Thumbnails
  "qUuaT7anQWJj0mjtXxD2zrGDXk.png","1irKxx9qHiXU2OSpq6Neja5Yvc.png","nuR4hS2fZYth4HQ4zvdkcQAMe4.png",
  "7xmcBBQALfX38yEYyZZWSvCUUig.png","A2iaxkZKWXPpil0WbJ4WvNP6I.png","6BotCZbBO2A3JtjzEq1ToHgmNA.png",
  "4b7OkHvadtaZtKhURr7DR2eso.png",
  # NoteLoom
  "iTnNnNA3XIjTZNsZy9LrzJUt9Y8.png","CzmpMcmOpE2z4h6aRHeBJQXHe5M.png","yD4WFqmb2h7ar5bYVXXkAT2s.png",
  "xFfhtlPS7VNwB4ECiGRiKPA5Ln4.png","cviM2gyWhm8pbTvcwB3f2z6ABKY.png","FUnUBNB5IZCrX94kUJVjngs3mE.png",
  "NLPMmfjFMpdNCEQQ0EXoUiGY0QY.png","lhzJdFkdxnflyFnBM9vsxjJU.png","TZDdg1veCmJZijl0nN6K5CKJww.png",
  "XM0WsvQd6NdNsO3s8SvZJZIHM7E.png","lYHn2gHGPDa6IMCHGx0AOQjgWwc.png",
  # Nova AI
  "SaR2SnwoaOcF7ThpM59tFTziLk.png","Vmley6oYrxVp9JnqMEmpEO9ZGmI.png","0LOIpgrPzWSsvFRrVER7yvtPM.png",
  "CimDCSO0hVljFYm9Va5jKFgsW4.png","CjAlojJNB8zt42wrHhWGMOzg8to.png","JWcohkbvmxf22tHd72BOCNF4U0.png",
  "yXMz7CB2C9sjIaWcrMdnwPus6DE.png","8pb5XXEZvOsT1RRahKST1Kq5Ko.png","4zLlpNinDDEmlb9IRaiAQP0R0.png",
  "8PBYOcvxW0i5dWGWgED5fqN40.jpg","KagqpLE65XijJmSyRwv7dheDJeM.png","hmMcexd46kYcBmtywk2o1qJW2U.png",
  # Mobile LMS
  "ZSetw0WSnoxATY68xPgthYM.png","neaiVeO3uACuBcs0I7SvBUDQ.jpeg","yVNiwEh4zNzXfdo5LDXkpeDLCY.png",
  "9xaCQMCHkm9GrDTQRUsYaMBoAo.png","8Khy7816SOu4n0nrqCUcICSElY.png","NxLBCCEqu49H3yzWYiu8H0CQA.png",
  "CvnTixcVRZQyJQwOYC5PcrqwywI.png","CHaA7NjFOE11TJtq954WKjhyJU.png","HmOchJeiYGj6CMOkmTEkwrO6KR4.png",
  "1cHvyrQIJUC8Fzpi1VdJuyoRFwk.png","6cKBy22L5Dmp2UTQ73mgpeKbhXg.png","xZpvRftThg4R35IhSuGKmVrbmk.png",
  "OIkQpgdlcWgenIxdIE7qwqvA0.png",
  # Media Production
  "Xfqilrny217HLjGxUVJXlTp26y4.png","JknUx9q1IfbNVUWqBwQMB0yX71E.png","OdVyEt8XONLPVBkyQ6mVvs4BOA.png",
  "sPfSZdAxlO5HUazbbUJMqWDpt0.png",
  # Dealer Sales
  "IQAzE0O0ZkcQWbxP9QN1fmqHVQI.png","nJTirRkweYpCFBtNo2qHlJkwhA.jpg","eKBtS0qs0eZzfKV8MiZJTp5MoBE.png",
  "dD1qia1bX6vAslLmeV6xuPAJeP8.png","wsca90ZEw2dM60Nrd2wpLynQ.png","3Swoxzec2ReofKmzbLkwONOkk.png",
  "81JkIO8qTvHesDurKQake1md740.png","179cajjBhbHIvBldVFtrpYqijE0.png",
  # Port Operations
  "uE0W2VPFdsrZlJycGASvfpIuKc.jpeg","PaXN3jcDKRcXB2oG72HVtLw0Bg.png","WPuhwI7wVhggtku2b01aySRjazg.png",
  "DdEJTfMBxPKOniH10fooKz96jbA.png","zB6FR8niLb4ge6Q7YllgB59rMo.png","5YOze8DzXjAtD8MP7MUGM1UuHo.png",
  "AWh2Hxp8HcvlZXrfJC4ZP3D4s.png","GEj0vLOzoaOkzQX1ODKFAnevIc.png","dWKK3XxqbxFwnps7q9Owae2cQKo.png",
  "0PDuc8mEpvuCC6SLhUMi3RkK8I.png","fEkitGPVMN2ht94w6YBaD72zZTQ.png"
)
$i = 0
foreach ($f in $files) {
  $i++
  $url = $base + $f
  $dest = Join-Path $out $f
  try {
    Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing
    Write-Host "[$i/$($files.Count)] OK  $f"
  } catch {
    Write-Host "[$i/$($files.Count)] FAIL $f  ($($_.Exception.Message))"
  }
}
Write-Host "Done. Saved to $out"
